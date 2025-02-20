import { Link } from '@tanstack/react-router';
import { ChevronLeft } from "lucide-react"

export default function Breadcrumb() {
  return (
    <div className='flex items-center gap-[12px]'>
      <Link to="/sign-in">
        <ChevronLeft color='#C9C9C9' size={24} />
      </Link>
      <span className='font-bold text-[22px]'>Reset password</span>
    </div>
  );
}
