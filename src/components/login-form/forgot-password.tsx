import { Link } from '@tanstack/react-router';
import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, BreadcrumbList, BreadcrumbSeparator } from "../ui/breadcrumb/breadcrumb";
import { ChevronRight } from "lucide-react"

export function ForgotPassword() {
  return (
    <Breadcrumb className='self-center'>
      <BreadcrumbList>
        <BreadcrumbItem>
          <BreadcrumbLink asChild className='font-bold text-xs text-black'>
            <Link to="/">Forgot your password?</Link>
          </BreadcrumbLink>
        </BreadcrumbItem>
        <BreadcrumbSeparator>
          <ChevronRight color='black' strokeWidth={'3px'} />
        </BreadcrumbSeparator>
      </BreadcrumbList>
    </Breadcrumb>
  );
}
