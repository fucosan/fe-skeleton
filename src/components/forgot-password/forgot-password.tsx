import React from 'react';
import Breadcrumb from './breadcrumb';
import { Label } from '../ui/label/label';
import { Button } from '../ui/button/button';
import { Input } from '../ui/input/input';

type ForgotPasswordProps = object;

export const ForgotPassword: React.FC<ForgotPasswordProps> = () => {
  return (
    <div className="bg-background flex flex-col w-[474px] h-[775px] p-[42px] gap-[36px]">
      <Breadcrumb />
      <hr />
      <span className="font-normal text-sm text-left">
        Please enter the administrator&apos;s email address. If your email address is valid, we will email you a verification code to change your password.
      </span>
      <div className="flex flex-col gap-[6px]">
        <Label htmlFor="email" className="font-bold text-xs">Authentication code</Label>
        <Input type="email" placeholder="Enter email address" />
      </div>
      <Button size='lg'>Send</Button>
      <span className='font-normal text-sm text-left'>
        *If you forget your email address, please contact the person in charge.
      </span>
    </div>
  );
};
