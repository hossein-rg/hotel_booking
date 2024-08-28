import Link from "next/link";
function Logo() {
    return (
        <Link href='/' className="flex items-center gap-4 z-10">
            <img style={{ width: '60px', height: '60px' }} src="/logo.png" alt="the wild oasis logo" />
            <span className="text-xl font-semibold text-primary-100">The Wild Oasis</span>
        </Link>
    );
}

export default Logo;