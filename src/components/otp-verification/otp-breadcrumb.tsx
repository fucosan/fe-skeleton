import { ChevronLeft } from "lucide-react"
import { useRouter } from '@tanstack/react-router'

export function OtpBreadcrumb() {
  const router = useRouter();

  return (
    <div className='flex items-center gap-[12px]'
      onClick={() => router.history.back()}
    >
      <ChevronLeft color='#C9C9C9' size={24} />
      <span className='font-bold text-[22px]'>Enter verification code</span>
    </div>
  );
}
