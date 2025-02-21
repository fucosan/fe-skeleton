import { Meta, StoryObj } from '@storybook/react';
import { EnhancedTable } from './enhanced-table';
import { ColumnDef } from '@tanstack/react-table';
import { MemberList } from '@/types/member-list';
import { MoveTopRightIcon } from '@/assets/icons';
import { Link } from '@tanstack/react-router';

const columns: ColumnDef<MemberList>[] = [
  {
    header: 'No',
    accessorKey: 'no',
    enablePinning: true,
  },
  {
    header: 'ID',
    accessorKey: 'id',
  },
  {
    header: 'Name',
    accessorKey: 'name',
  },
  {
    header: 'Email',
    accessorKey: 'email',
  },
  {
    header: 'Furigana',
    accessorKey: 'furigana',
  },
  {
    header: 'Identity Verification',
    accessorKey: 'identityVerification',
  },
  {
    header: 'Account Number',
    accessorKey: 'accountNumber',
  },
  {
    header: 'Rank',
    accessorKey: 'rank',
  },
  {
    header: 'Telephone',
    accessorKey: 'telephone',
  },
  {
    header: 'Register By',
    accessorKey: 'registerBy',
  },
  {
    header: 'Register Date',
    accessorKey: 'registerDate',
  },
  {
    header: '',
    accessorKey: 'action',
    cell: () => (
      <div className='h-full w-full border-l px-[12px] py-[10px]'>
        <Link to='.' className='border px-[8px] py-[5px] gap-[6px] rounded-[5px] bg-muted m-0 flex items-center justify-center'>
          <span>Detail</span><MoveTopRightIcon />
        </Link>
      </div>
    ),
    meta: {
      pinned: true,
    }
  }
];

const memberData: MemberList[] = [
  {
    no: 1,
    id: "1234-1234-1234",
    name: "Taro Tanaka",
    email: "tarotanaka@gmail.com",
    furigana: "タナカ タロウ",
    identityVerification: "Not registered",
    accountNumber: "1234-1234-1234",
    rank: "Silver",
    telephone: "0120970060",
    registerBy: "タナカタロウ",
    registerDate: "2024/11/01"
  },
  {
    no: 2,
    id: "1234-1234-1234",
    name: "Alexander Smith",
    email: "alexander-smith@gmail.com",
    furigana: "アレクサンダース････",
    identityVerification: "Registered/Waiting for processing",
    accountNumber: "1234-1234-1234",
    rank: "Platinum",
    telephone: "0120970060",
    registerBy: "タナカ タロウ",
    registerDate: "2024/10/30"
  },
  {
    no: 3,
    id: "1234-1234-1234",
    name: "Taro Tanaka",
    email: "tarotanaka@gmail.com",
    furigana: "タナカ タロウ",
    identityVerification: "Identity confirmed",
    accountNumber: "1234-1234-1234",
    rank: "Gold",
    telephone: "0120970060",
    registerBy: "", // No data provided in image
    registerDate: "2024/10/29"
  },
  {
    no: 4,
    id: "1234-1234-1234",
    name: "Jessica Thompson",
    email: "jessica thompson@gmail.com",
    furigana: "ジェシカ トムソン",
    identityVerification: "Not approved",
    accountNumber: "1234-1234-1234",
    rank: "Bronze",
    telephone: "01209710060",
    registerBy: "タニタロワ",
    registerDate: "2024/10/29"
  },
  {
    no: 5,
    id: "1234-1234-1234",
    name: "Taro Tanaka",
    email: "tarotanaka@gmail.com",
    furigana: "タナカ タロウ",
    identityVerification: "Not registered",
    accountNumber: "1234-1234-1234",
    rank: "Silver",
    telephone: "0120970060",
    registerBy: "Nood confirmation", // Typo in image, assuming it's a name
    registerDate: "2024/10/28"
  },
  {
    no: 6,
    id: "1234-1234-1234",
    name: "Jessica Thompson",
    email: "jessica_thompson@gmail.com",
    furigana: "ジェシカ トムソン",
    identityVerification: "Not approved",
    accountNumber: "1234-1234-1234",
    rank: "Bronze",
    telephone: "0120970060",
    registerBy: "チャコ メロワ",
    registerDate: "2024/10/25"
  },
  {
    no: 7,
    id: "1234-1234-1234",
    name: "Taro Tanaka this is long very long name",
    email: "tarutanaka@gmail.com", // Typo in image, should be "tarotanaka"
    furigana: "タナカ タロウ",
    identityVerification: "identity confirmed", // Typo in image, should be "Identity confirmed"
    accountNumber: "1234-1234-1234",
    rank: "Gold",
    telephone: "0120970060",
    registerBy: "", // No data provided in image
    registerDate: "2024/10/20"
  },
  {
    no: 8,
    id: "1234-1234-1234",
    name: "Alexander Smith",
    email: "alexander-smith@gmail.com",
    furigana: "アレクサンダー スー",
    identityVerification: "Registered/Waiting for processing",
    accountNumber: "1234-1234-1234",
    rank: "Platinum",
    telephone: "0120970060",
    registerBy: "タナカ タロウ",
    registerDate: "2024/10/19"
  }
];

function EnhancedTableStory() {
  return (
    <div className='w-[1118px]'>
      <EnhancedTable
        columns={columns}
        data={memberData}
      />
    </div>
  );
}

const meta = {
  title: 'Components/enhanced-table',
  component: EnhancedTableStory,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {},
} satisfies Meta<typeof EnhancedTable>;

export default meta;

type Story = StoryObj<typeof meta>;
export const Default: Story = {
  args: {},
};
