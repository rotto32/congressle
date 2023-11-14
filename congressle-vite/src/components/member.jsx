const Props = {
  memberData: {},
}

export const Member = (Props) => {
  return (
    <div className="container m-8 flex">
      {Props.memberData.name.first} {Props.memberData.name.last}
    </div>
  )
}