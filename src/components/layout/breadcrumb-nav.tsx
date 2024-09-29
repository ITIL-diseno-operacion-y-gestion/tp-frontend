"use client";

import { Route } from "next";
import Link from "next/link";
import { usePathname } from "next/navigation";

import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import { uppercaseFirst } from "@/lib/utils";

export function BreadCrumbNav() {
  const pathname = usePathname();
  const paths = pathname.split("/");

  if (paths[0] === "" && paths[1] === "") paths.shift();

  return (
    <Breadcrumb>
      <BreadcrumbList>
        {paths.map((path, index) => (
          <PathItem
            path={(paths.slice(0, index + 1).join("/") || "/") as Route}
            name={path === "" ? "Inicio" : uppercaseFirst(path)}
            key={index}
            isLast={index === paths.length - 1}
          />
        ))}
      </BreadcrumbList>
    </Breadcrumb>
  );
}

const PathItem = ({
  path,
  name,
  isLast,
}: {
  path: Route;
  isLast: boolean;
  name: string;
}) => {
  return (
    <>
      <BreadcrumbItem>
        {isLast ? (
          <BreadcrumbPage>{name}</BreadcrumbPage>
        ) : (
          <BreadcrumbLink asChild>
            <Link href={path}>{name}</Link>
          </BreadcrumbLink>
        )}
      </BreadcrumbItem>
      {!isLast && <BreadcrumbSeparator />}
    </>
  );
};
