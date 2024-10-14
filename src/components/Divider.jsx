export default function Divider({ bgColor = 'bg-black' }) {
    return (
        <div className={`h-[1px] ${bgColor} my-[1rem]`}></div>
    );
}
