type Props = {
  id: string
}

export default function AnchorLink({ id }: Props) {
  return (
    <div className="relative">
      {/* biome-ignore lint/a11y/useAnchorContent: <explanation> */}
      <a href={`#${id}`} className="absolute" />
      <span id={id} className="absolute" />
    </div>
  )
}
