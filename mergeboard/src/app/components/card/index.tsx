import {
  Card as ShadCnCard,
  CardAction,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import React from "react";

const Card = ({
  title,
  description,
  action,
  content,
  footer,
  className,
}: {
  title: React.ReactNode;
  description?: React.ReactNode;
  action?: React.ReactNode;
  content?: React.ReactNode;
  footer?: React.ReactNode;
  className?: string;
}) => (
  <ShadCnCard className={className}>
    <CardHeader>
      <CardTitle>{title}</CardTitle>
      <CardDescription>{description}</CardDescription>
      <CardAction>{action}</CardAction>
    </CardHeader>
    <CardContent>{content}</CardContent>
    <CardFooter>{footer}</CardFooter>
  </ShadCnCard>
);

export default Card;
