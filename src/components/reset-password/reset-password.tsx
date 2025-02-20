import React from 'react';
import Breadcrumb from './breadcrumb';
import { Label } from '../ui/label/label';
import { Button } from '../ui/button/button';
import { PasswordField } from '../input-field/password';

type ResetPasswordProps = object;

export const ResetPassword: React.FC<ResetPasswordProps> = () => {
  return (
    <div className="bg-background flex flex-col w-[474px] h-[775px] p-[42px] gap-[36px]">
      <Breadcrumb />
      <hr />
      <div className="flex flex-col gap-[6px]">
        <Label htmlFor="new-password" className="font-bold text-xs">New Password</Label>
        <PasswordField placeholder="Enter password" />
        <span className="font-normal text-sm text-left">
          * 8 or more half-width alphanumeric characters * Includes half-width alphanumeric characters or half-width symbols (- / _ %) * Uppercase and lowercase letters are distinguished
        </span>
      </div>
      <div className="flex flex-col gap-[6px]">
        <Label htmlFor="confirm-password" className="font-bold text-xs">New Password (for confirmation)</Label>
        <PasswordField placeholder="Enter password" />
      </div>
      <Button size='lg'>Send</Button>
    </div>
  );
};
