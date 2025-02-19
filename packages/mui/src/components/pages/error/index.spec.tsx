import React from "react";
import ReactRouterDom, { Route, Routes } from "react-router-dom";

import { ErrorComponent } from ".";
import { render, fireEvent, TestWrapper, act } from "@test";

const mHistory = jest.fn();

jest.mock("react-router-dom", () => ({
    ...(jest.requireActual("react-router-dom") as typeof ReactRouterDom),
    useNavigate: () => mHistory,
}));

describe("ErrorComponent", () => {
    it("renders subtitle successfully", async () => {
        jest.useFakeTimers();

        const { getByText } = render(<ErrorComponent />, {
            wrapper: TestWrapper({}),
        });

        await act(async () => {
            jest.advanceTimersToNextTimer(1);
        });

        getByText("Sorry, the page you visited does not exist.");
    });

    it("renders button successfully", async () => {
        jest.useFakeTimers();

        const { container, getByText } = render(<ErrorComponent />, {
            wrapper: TestWrapper({}),
        });

        await act(async () => {
            jest.advanceTimersToNextTimer(1);
        });

        expect(container.querySelector("button")).toBeTruthy();
        getByText("Back Home");
    });

    it("renders called function successfully if click the button", async () => {
        jest.useFakeTimers();

        const { getByText } = render(<ErrorComponent />, {
            wrapper: TestWrapper({}),
        });

        await act(async () => {
            jest.advanceTimersToNextTimer(1);
        });

        await act(async () => {
            fireEvent.click(getByText("Back Home"));
        });

        expect(mHistory).toBeCalledWith("/", undefined);
    });

    it("renders error messages if resources action's not found", async () => {
        jest.useFakeTimers();

        const { getByTestId, findByText } = render(
            <Routes>
                <Route path="/:resource/:action" element={<ErrorComponent />} />
            </Routes>,
            {
                wrapper: TestWrapper({
                    routerInitialEntries: ["/posts/create"],
                }),
            },
        );

        await act(async () => {
            jest.advanceTimersToNextTimer(1);
        });

        await act(async () => {
            fireEvent.mouseEnter(getByTestId("error-component-tooltip"));
        });

        await act(async () => {
            jest.runAllTimers();
        });

        const element = await findByText(
            `You may have forgotten to add the "create" component to "posts" resource.`,
        );

        expect(element).toBeInTheDocument();
    });

    it("renders error messages if resource action's is different from 'create, edit, show'", async () => {
        jest.useFakeTimers();

        const { getByText } = render(
            <Routes>
                <Route path="/:resource/:action" element={<ErrorComponent />} />
            </Routes>,
            {
                wrapper: TestWrapper({
                    routerInitialEntries: ["/posts/invalidActionType"],
                }),
            },
        );

        await act(async () => {
            jest.advanceTimersToNextTimer(1);
        });

        getByText("Sorry, the page you visited does not exist.");
    });
});
