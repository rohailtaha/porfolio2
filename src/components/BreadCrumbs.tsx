import Link from 'next/link';
import { Fragment } from 'react';

type BreakCrumbsProps = {
  links: Array<{ href: string; name: string }>;
};

function BreadCrumbs({ links }: BreakCrumbsProps) {
  return (
    <ul className="flex-c gap-x-3">
      {links.map((link, index) => {
        const isLastLink = index === links.length - 1;
        return (
          <Fragment key={link.href}>
            <li className={isLastLink ? 'font-bold underline' : ''}>
              <Link href={link.href}>{link.name}</Link>
            </li>
            {!isLastLink && (
              <li>
                <span>/</span>
              </li>
            )}
          </Fragment>
        );
      })}
    </ul>
  );
}

export default BreadCrumbs;
