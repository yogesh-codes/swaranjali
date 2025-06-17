import tapeUrl from "./assets/tape.png";
export type DNCtapeProps = React.HTMLAttributes<HTMLDivElement>;

export function DNCTape({ children, className, style, ...rest }: DNCtapeProps) {
    return (
        <div
            className={`fixed z-51 ${className}`}
            style={{ ...style, backgroundImage: `url(${tapeUrl})` }}
            {...rest}
        >
            {children}
        </div>
    );
}
