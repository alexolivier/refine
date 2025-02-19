import React from "react";

import { LoadingButton } from "@mui/lab";
import ImportExportOutlinedIcon from "@mui/icons-material/ImportExportOutlined";

import { useTranslate, UseImportInputPropsType } from "@pankod/refine-core";
import { ButtonProps, SvgIconProps } from "@mui/material";

export type ImportButtonProps = ButtonProps & {
    inputProps: UseImportInputPropsType;
    hideText?: boolean;
    loading?: boolean;
    svgIconProps?: SvgIconProps;
};

/**
 * `<ImportButton>` is compatible with the {@link https://refine.dev/docs/core/hooks/import-export/useImport/ `useImport`} core hook.
 * It uses Material UI {@link https://mui.com/material-ui/api/loading-button/#main-content  `<LoadingButton>`} and native html {@link https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input  `<input>`} element.
 *
 * @see {@link https://refine.dev/docs/ui-frameworks/mui/components/buttons/import-button} for more details.
 */
export const ImportButton: React.FC<ImportButtonProps> = ({
    inputProps,
    hideText = false,
    loading = false,
    svgIconProps,
    children,
    ...rest
}) => {
    const translate = useTranslate();

    const { sx, ...restProps } = rest;

    return (
        <label htmlFor="contained-button-file">
            <input {...inputProps} id="contained-button-file" multiple hidden />
            <LoadingButton
                component="span"
                startIcon={
                    !hideText && <ImportExportOutlinedIcon {...svgIconProps} />
                }
                loadingPosition={hideText ? "center" : "start"}
                loading={loading}
                sx={{ minWidth: 0, ...sx }}
                {...restProps}
            >
                {hideText ? (
                    <ImportExportOutlinedIcon
                        fontSize="small"
                        {...svgIconProps}
                    />
                ) : (
                    children ?? translate("buttons.import", "Import")
                )}
            </LoadingButton>
        </label>
    );
};
