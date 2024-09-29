import { TypographyH2 } from '@/components/typography'
import MainContainer from '@/components/MainContainer'

const Users = () => {
  return (
    <div className="flex h-full flex-col">
      <MainContainer>
        <div className="mb-2  flex justify-between">
          <TypographyH2 text="Users" />
        </div>

        <div className="flex justify-between pb-4">
          <div className="flex align-middle">Manage app users</div>
        </div>

        <div className="h-1 w-full shadow-sm" />
      </MainContainer>

      <div className="w-full overflow-scroll pb-12 pt-6">
        <MainContainer>User table</MainContainer>
      </div>
    </div>
  )
}
export default Users
