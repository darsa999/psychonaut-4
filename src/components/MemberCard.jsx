import { usePrefs } from '../i18n/PrefsContext';

/** Figma component "Member Card": portrait (or initial placeholder), name, roles. */
export default function MemberCard({ member }) {
  const { t } = usePrefs();
  return (
    <article className="flex flex-col gap-3.5">
      <div className="relative aspect-[220/280] overflow-hidden border border-rule bg-gradient-to-b from-wall-3 to-wall">
        {member.photo ? (
          <img
            src={member.photo}
            alt={member.name}
            loading="lazy"
            className="absolute inset-0 h-full w-full object-cover grayscale-[40%] contrast-110"
          />
        ) : (
          <span
            aria-hidden="true"
            className="absolute inset-0 flex items-center justify-center text-[8rem] sm:text-[10rem] font-light leading-none opacity-[0.12]"
          >
            {member.name[0]}
          </span>
        )}
        <span className="absolute left-5 bottom-6 h-0.5 w-6 bg-accent" aria-hidden="true" />
      </div>
      <h3 className="m-0 text-[1.375rem] sm:text-[1.625rem] font-medium leading-tight">{member.name}</h3>
      <p className="meta m-0">{member.roles.map((r) => t(r)).join(' · ')}</p>
    </article>
  );
}
