(this["webpackJsonprefine-base-example"]=this["webpackJsonprefine-base-example"]||[]).push([[0],{1247:function(e,t,r){"use strict";r.r(t);var l=r(0),c=r.n(l),a=r(44),n=r.n(a),i=r(31),o=r(583),s=(r(1179),r(71)),d=r(27),j=i.Typography.Title,u=function(){var e,t,r=Object(i.useTable)(),l=r.tableProps,c=(r.filters,null!==(e=null===l||void 0===l||null===(t=l.dataSource)||void 0===t?void 0:t.map((function(e){return e.category.id})))&&void 0!==e?e:[]),a=Object(i.useMany)("categories",c,{enabled:c.length>0}),n=a.data,o=a.isLoading,u=Object(i.useCheckboxGroup)({resource:"categories"}).checkboxGroupProps,b=Object(i.useSelect)({resource:"categories",optionLabel:"title",optionValue:"id"}).selectProps;return Object(d.jsx)(i.List,{children:Object(d.jsxs)(i.Table,Object(s.a)(Object(s.a)({},l),{},{rowKey:"id",children:[Object(d.jsx)(i.Table.Column,{dataIndex:"id",title:"ID"}),Object(d.jsx)(i.Table.Column,{dataIndex:"title",title:"Title",filterDropdown:function(e){return Object(d.jsxs)(i.FilterDropdown,Object(s.a)(Object(s.a)({},e),{},{children:[Object(d.jsx)(j,{level:5,children:"Rol Se\xe7in"}),Object(d.jsx)(i.Checkbox.Group,Object(s.a)({style:{width:200}},u))]}))}}),Object(d.jsx)(i.Table.Column,{dataIndex:["category","id"],title:"Category",render:function(e){var t;return o?Object(d.jsx)(i.TextField,{value:"Loading..."}):Object(d.jsx)(i.TextField,{value:null===n||void 0===n||null===(t=n.data.find((function(t){return t.id===e})))||void 0===t?void 0:t.title})},filterDropdown:function(e){return Object(d.jsx)(i.FilterDropdown,Object(s.a)(Object(s.a)({},e),{},{children:Object(d.jsx)(i.Select,Object(s.a)({style:{minWidth:200},mode:"multiple",placeholder:"Select Category"},b))}))}}),Object(d.jsx)(i.Table.Column,{dataIndex:"status",title:"Status",render:function(e){return Object(d.jsx)(i.TagField,{value:e})},filterDropdown:function(e){return Object(d.jsx)(i.FilterDropdown,Object(s.a)(Object(s.a)({},e),{},{mapValue:function(e){return e[0]},children:Object(d.jsxs)(i.Radio.Group,{children:[Object(d.jsx)(i.Radio,{value:"published",children:"Published"}),Object(d.jsx)(i.Radio,{value:"draft",children:"Draft"}),Object(d.jsx)(i.Radio,{value:"rejected",children:"Rejected"})]})}))}}),Object(d.jsx)(i.Table.Column,{title:"Actions",dataIndex:"actions",render:function(e,t){return Object(d.jsxs)(i.Space,{children:[Object(d.jsx)(i.EditButton,{size:"small",recordItemId:t.id}),Object(d.jsx)(i.ShowButton,{size:"small",recordItemId:t.id})]})}})]}))})},b=r(331),O=r(324),x=r.n(O),h=r(223),v=r.n(h),m=(r(578),function(){var e=Object(i.useForm)(),t=e.formProps,r=e.saveButtonProps,c=Object(i.useSelect)({resource:"categories"}).selectProps,a=Object(l.useState)("write"),n=Object(b.a)(a,2),o=n[0],j=n[1];return Object(d.jsx)(i.Create,{saveButtonProps:r,children:Object(d.jsxs)(i.Form,Object(s.a)(Object(s.a)({},t),{},{layout:"vertical",children:[Object(d.jsx)(i.Form.Item,{label:"Title",name:"title",rules:[{required:!0}],children:Object(d.jsx)(i.Input,{})}),Object(d.jsx)(i.Form.Item,{label:"Category",name:["category","id"],rules:[{required:!0}],children:Object(d.jsx)(i.Select,Object(s.a)({},c))}),Object(d.jsx)(i.Form.Item,{label:"Status",name:"status",rules:[{required:!0}],children:Object(d.jsx)(i.Select,{options:[{label:"Published",value:"published"},{label:"Draft",value:"draft"},{label:"Rejected",value:"rejected"}]})}),Object(d.jsx)(i.Form.Item,{label:"Content",name:"content",rules:[{required:!0}],children:Object(d.jsx)(v.a,{selectedTab:o,onTabChange:j,generateMarkdownPreview:function(e){return Promise.resolve(Object(d.jsx)(x.a,{children:e}))}})})]}))})}),p=function(){var e,t=Object(i.useForm)(),r=t.formProps,c=t.saveButtonProps,a=t.queryResult,n=null===a||void 0===a||null===(e=a.data)||void 0===e?void 0:e.data,o=Object(i.useSelect)({resource:"categories",defaultValue:null===n||void 0===n?void 0:n.category.id}).selectProps,j=Object(l.useState)("write"),u=Object(b.a)(j,2),O=u[0],h=u[1];return Object(d.jsx)(i.Edit,{saveButtonProps:c,children:Object(d.jsxs)(i.Form,Object(s.a)(Object(s.a)({},r),{},{layout:"vertical",children:[Object(d.jsx)(i.Form.Item,{label:"Title",name:"title",rules:[{required:!0}],children:Object(d.jsx)(i.Input,{})}),Object(d.jsx)(i.Form.Item,{label:"Category",name:["category","id"],rules:[{required:!0}],children:Object(d.jsx)(i.Select,Object(s.a)({},o))}),Object(d.jsx)(i.Form.Item,{label:"Status",name:"status",rules:[{required:!0}],children:Object(d.jsx)(i.Select,{options:[{label:"Published",value:"published"},{label:"Draft",value:"draft"},{label:"Rejected",value:"rejected"}]})}),Object(d.jsx)(i.Form.Item,{label:"Content",name:"content",rules:[{required:!0}],children:Object(d.jsx)(v.a,{selectedTab:O,onTabChange:h,generateMarkdownPreview:function(e){return Promise.resolve(Object(d.jsx)(x.a,{children:e}))}})})]}))})},f=i.Typography.Title,g=i.Typography.Text,y=function(){var e=Object(i.useShow)().queryResult,t=e.data,r=e.isLoading,l=null===t||void 0===t?void 0:t.data,c=Object(i.useOne)("categories",(null===l||void 0===l?void 0:l.category.id)||"",{enabled:!!l}),a=c.data,n=c.isLoading;return Object(d.jsxs)(i.Show,{isLoading:r,children:[Object(d.jsx)(f,{level:5,children:"Id"}),Object(d.jsx)(g,{children:null===l||void 0===l?void 0:l.id}),Object(d.jsx)(f,{level:5,children:"Title"}),Object(d.jsx)(g,{children:null===l||void 0===l?void 0:l.title}),Object(d.jsx)(f,{level:5,children:"Category"}),Object(d.jsx)(g,{children:n?"Loading...":null===a||void 0===a?void 0:a.data.title}),Object(d.jsx)(f,{level:5,children:"Content"}),Object(d.jsx)(i.MarkdownField,{value:null===l||void 0===l?void 0:l.content})]})},T=function(){return Object(d.jsx)(i.Refine,{dataProvider:Object(o.a)("https://api.fake-rest.refine.dev"),children:Object(d.jsx)(i.Resource,{name:"posts",list:u,create:m,edit:p,show:y})})};n.a.render(Object(d.jsx)(c.a.StrictMode,{children:Object(d.jsx)(T,{})}),document.getElementById("root"))},775:function(e,t){}},[[1247,1,2]]]);
//# sourceMappingURL=main.29895f37.chunk.js.map