interface SettingsHeaderProps {
  title: string;
  excludeBackButton?: boolean;
}

export default function SettingsHeader({
  title,
  excludeBackButton,
}: SettingsHeaderProps) {
  return (
    <div className="mb-3 flex items-center gap-3">
      {/* {!excludeBackButton && <button onClick={() => history.back()}>←</button>} */}
      <h1 className="text-2xl font-bold">{title}</h1>
    </div>
  );
}
