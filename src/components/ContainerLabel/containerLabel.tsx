interface IContainerLabelProps{
  title: string;
}

export const ContainerLabel: React.FC<IContainerLabelProps> = ({title}) => {
  return (
    <div className="pt-5 pl-6 pb-5 text-[#ace69a] text-lg tracking-widest">
      <p>{title}</p>
    </div>
  )
}