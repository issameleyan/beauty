import React from 'react';
import { cn } from '@/lib/utils';
import { LucideIcon } from 'lucide-react';

type ContactInfoProps = React.ComponentProps<'div'> & {
  icon: LucideIcon;
  label: string;
  value: string;
};

type ContactCardProps = React.ComponentProps<'div'> & {
  title?: string;
  description?: string;
  contactInfo?: ContactInfoProps[];
  formSectionClassName?: string;
};

export function ContactCard({
  title = 'Contact With Us',
  description = 'If you have any questions regarding our Services or need help, please fill out the form here.',
  contactInfo,
  className,
  formSectionClassName,
  children,
  ...props
}: ContactCardProps) {
  return (
    <div
      className={cn(
        'grid w-full overflow-hidden rounded-2xl border border-border bg-card shadow-lg md:grid-cols-2',
        className
      )}
      {...props}
    >
      <div className="flex flex-col justify-center gap-8 bg-gradient-to-br from-primary to-accent p-8 text-primary-foreground md:p-12">
        <div>
          <h2 className="text-2xl font-bold md:text-3xl">{title}</h2>
          <p className="mt-3 text-sm leading-relaxed text-primary-foreground/80">{description}</p>
        </div>
        <div className="grid gap-4 sm:grid-cols-2">
          {contactInfo?.map((info, index) => (
            <ContactInfo key={index} {...info} />
          ))}
        </div>
      </div>

      <div className={cn('p-8 md:p-12', formSectionClassName)}>
        {children}
      </div>
    </div>
  );
}

function ContactInfo({
  icon: Icon,
  label,
  value,
  className,
  ...props
}: ContactInfoProps) {
  return (
    <div className={cn('flex items-start gap-3', className)} {...props}>
      <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-primary-foreground/10">
        <Icon className="h-5 w-5" />
      </div>
      <div>
        <p className="text-xs font-medium text-primary-foreground/70">{label}</p>
        <p className="text-sm font-semibold">{value}</p>
      </div>
    </div>
  );
}
