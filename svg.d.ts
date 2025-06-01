// File: svg.d.ts
declare module "*.svg" {
    import * as React from "react";

    // This says that importing an SVG gives you a React component
    // with all the normal SVG props (incl. className, fill, etc.)
    const ReactComponent: React.FunctionComponent<
        React.SVGProps<SVGSVGElement> & { title?: string }
    >;

    export default ReactComponent;
}
