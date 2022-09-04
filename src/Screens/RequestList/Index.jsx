import { Link } from "react-router-dom";
import { Table, Space} from "antd";
import  { RequestListStyled } from "./style";
import CustomButton from "../../Components/CustomButton/Index";
import {secondaryGreen } from "../../Components/GlobalStyle";
import deleteIcon from "../../assets/icons/ic_delete.svg";
import editIcon from "../../assets/icons/ic_edit.svg";
import MobileTable from "./MobileTable";
import Navbar from '../../Components/Navbar/Index';
import { Container } from "react-bootstrap";
import avatar from '../../assets/icons/ic_user_role.svg'

const columns = [
  {
    title: "Id",
    dataIndex: "id",
    key: "id",
    render: (text, record) => (
      <Link className="table-link" to={`/estimates/${record.id}`}> {text+1} </Link>
    ),
  },
  {
    title: "BCategory",
    dataIndex: "category",
    key: "category",
    render: (text, record) => (
      <Link to={`/estimates/${record.id}`}>
        {text}
      </Link>
    ),
  },
  {
    title: "Sender",
    dataIndex: "sender",
    key: "sender",
    render: ({name,img}, record) => (
        <div className="d-flex align-items-center">
          <img src={avatar} alt="avatar" />
      <Link className="ms-3" to={`/estimates/${record.id}`}>
        {name}
      </Link>
        </div>
    ),
  }, {
    title: "Receiver",
    dataIndex: "receiver",
    key: "receiver",
    render: ({name,img}, record) => (
        <div className="d-flex align-items-center">
          <img src={avatar} alt="avatar" />
      <Link className="ms-3" to={`/estimates/${record.id}`}>
        {name}
      </Link>
        </div>
    ),
  },
  {
    title: "Booking Type",
    dataIndex: "bookingType",
    key: "bookingType",
    render: (text, record) => (
      <Link to={`/estimates/${record.id}`}>
        {text}
      </Link>
    ),
  },
  {
    title: "Booking At",
    dataIndex: "bookingAt",
    key: "bookingAt",
    render: (text, record) => (
      <Link to={`/estimates/${record.id}`}>
        {text}
      </Link>
    ),
  },
  {
    title: "Status",
    key: "status",
    dataIndex: "status",
    render: (text, record) => (
      <CustomButton
        bgcolor={`${secondaryGreen}`}
        color="white"
        padding="2px 4px"
        width="80%"
        type="submit"
        title="Active"
      />

    ),
  },
  {
    title: "Created At",
    key: "createdAt",
    dataIndex: "createdAt",
    render: (text, record) => (
      <Link to={`/estimates/${record.id}`}>
        {text}
      </Link>
    ),
  },
  {
    title: "Action",
    key: "action",
    render: (text, record) => (
      <Space size="large">
        <div style={{ display: "flex", gap: "6px" }}>
        </div>
        <div style={{ display: "flex", gap: "4px" }}>
          <img
            src={deleteIcon}
            alt="delete Icon"
            className="action_icons deleteicon"

          />
          <Link to={`/estimates/update/${record.id}`}>
            <img
              src={editIcon}
              alt="edit Icon"
              className="action_icons editicon"
            />
          </Link>
        </div>
      </Space>
    ),
  },
];

const adminsData = [
  {
    sender: {
      img: avatar, name: 'Adnan Qureshi',
    },receiver: {
      img: avatar, name: "o'neil mclean",
    },
    category:'Property',
    bookingType: 'in person',
    createdAt: '13-August-2020 12:34 AM',
    bookingAt: '13-August-2020 12:34 AM',
  },
  {
    sender: {
      img: avatar, name: 'Adnan Qureshi',
    },receiver: {
      img: avatar, name: "o'neil mclean",
    },
    category:'Property',
    bookingType: 'in person',
    createdAt: '13-August-2020 12:34 AM',
    bookingAt: '13-August-2020 12:34 AM',
  },{
    sender: {
      img: avatar, name: 'Adnan Qureshi',
    },receiver: {
      img: avatar, name: "o'neil mclean",
    },
    category:'Property',
    bookingType: 'in person',
    createdAt: '13-August-2020 12:34 AM',
    bookingAt: '13-August-2020 12:34 AM',
  },{
    sender: {
      img: avatar, name: 'Adnan Qureshi',
    },receiver: {
      img: avatar, name: "o'neil mclean",
    },
    category:'Property',
    bookingType: 'in person',
    createdAt: '13-August-2020 12:34 AM',
    bookingAt: '13-August-2020 12:34 AM',
  },{
    sender: {
      img: avatar, name: 'Adnan Qureshi',
    },receiver: {
      img: avatar, name: "o'neil mclean",
    },
    category:'Property',
    bookingType: 'in person',
    createdAt: '13-August-2020 12:34 AM',
    bookingAt: '13-August-2020 12:34 AM',
  },{
    sender: {
      img: avatar, name: 'Adnan Qureshi',
    },receiver: {
      img: avatar, name: "o'neil mclean",
    },
    category:'Property',
    bookingType: 'in person',
    createdAt: '13-August-2020 12:34 AM',
    bookingAt: '13-August-2020 12:34 AM',
  },{
    sender: {
      img: avatar, name: 'Adnan Qureshi',
    },receiver: {
      img: avatar, name: "o'neil mclean",
    },
    category:'Property',
    bookingType: 'in person',
    createdAt: '13-August-2020 12:34 AM',
    bookingAt: '13-August-2020 12:34 AM',
  },{
    sender: {
      img: avatar, name: 'Adnan Qureshi',
    },receiver: {
      img: avatar, name: "o'neil mclean",
    },
    category:'Property',
    bookingType: 'in person',
    createdAt: '13-August-2020 12:34 AM',
    bookingAt: '13-August-2020 12:34 AM',
  },{
    sender: {
      img: avatar, name: 'Adnan Qureshi',
    },receiver: {
      img: avatar, name: "o'neil mclean",
    },
    category:'Property',
    bookingType: 'in person',
    createdAt: '13-August-2020 12:34 AM',
    bookingAt: '13-August-2020 12:34 AM',
  },{
    sender: {
      img: avatar, name: 'Adnan Qureshi',
    },receiver: {
      img: avatar, name: "o'neil mclean",
    },
    category:'Property',
    bookingType: 'in person',
    createdAt: '13-August-2020 12:34 AM',
    bookingAt: '13-August-2020 12:34 AM',
  },{
    sender: {
      img: avatar, name: 'Adnan Qureshi',
    },receiver: {
      img: avatar, name: "o'neil mclean",
    },
    category:'Property',
    bookingType: 'in person',
    createdAt: '13-August-2020 12:34 AM',
    bookingAt: '13-August-2020 12:34 AM',
  },{
    sender: {
      img: avatar, name: 'Adnan Qureshi',
    },receiver: {
      img: avatar, name: "o'neil mclean",
    },
    category:'Property',
    bookingType: 'in person',
    createdAt: '13-August-2020 12:34 AM',
    bookingAt: '13-August-2020 12:34 AM',
  },{
    sender: {
      img: avatar, name: 'Adnan Qureshi',
    },receiver: {
      img: avatar, name: "o'neil mclean",
    },
    category:'Property',
    bookingType: 'in person',
    createdAt: '13-August-2020 12:34 AM',
    bookingAt: '13-August-2020 12:34 AM',
  },{
    sender: {
      img: avatar, name: 'Adnan Qureshi',
    },receiver: {
      img: avatar, name: "o'neil mclean",
    },
    category:'Property',
    bookingType: 'in person',
    createdAt: '13-August-2020 12:34 AM',
    bookingAt: '13-August-2020 12:34 AM',
  },{
    sender: {
      img: avatar, name: 'Adnan Qureshi',
    },receiver: {
      img: avatar, name: "o'neil mclean",
    },
    category:'Property',
    bookingType: 'in person',
    createdAt: '13-August-2020 12:34 AM',
    bookingAt: '13-August-2020 12:34 AM',
  },{
    sender: {
      img: avatar, name: 'Adnan Qureshi',
    },receiver: {
      img: avatar, name: "o'neil mclean",
    },
    category:'Property',
    bookingType: 'in person',
    createdAt: '13-August-2020 12:34 AM',
    bookingAt: '13-August-2020 12:34 AM',
  },{
    sender: {
      img: avatar, name: 'Adnan Qureshi',
    },receiver: {
      img: avatar, name: "o'neil mclean",
    },
    category:'Property',
    bookingType: 'in person',
    createdAt: '13-August-2020 12:34 AM',
    bookingAt: '13-August-2020 12:34 AM',
  },{
    sender: {
      img: avatar, name: 'Adnan Qureshi',
    },receiver: {
      img: avatar, name: "o'neil mclean",
    },
    category:'Property',
    bookingType: 'in person',
    createdAt: '13-August-2020 12:34 AM',
    bookingAt: '13-August-2020 12:34 AM',
  },{
    sender: {
      img: avatar, name: 'Adnan Qureshi',
    },receiver: {
      img: avatar, name: "o'neil mclean",
    },
    category:'Property',
    bookingType: 'in person',
    createdAt: '13-August-2020 12:34 AM',
    bookingAt: '13-August-2020 12:34 AM',
  },{
    sender: {
      img: avatar, name: 'Adnan Qureshi',
    },receiver: {
      img: avatar, name: "o'neil mclean",
    },
    category:'Property',
    bookingType: 'in person',
    createdAt: '13-August-2020 12:34 AM',
    bookingAt: '13-August-2020 12:34 AM',
  },{
    sender: {
      img: avatar, name: 'Adnan Qureshi',
    },receiver: {
      img: avatar, name: "o'neil mclean",
    },
    category:'Property',
    bookingType: 'in person',
    createdAt: '13-August-2020 12:34 AM',
    bookingAt: '13-August-2020 12:34 AM',
  },{
    sender: {
      img: avatar, name: 'Adnan Qureshi',
    },receiver: {
      img: avatar, name: "o'neil mclean",
    },
    category:'Property',
    bookingType: 'in person',
    createdAt: '13-August-2020 12:34 AM',
    bookingAt: '13-August-2020 12:34 AM',
  },{
    sender: {
      img: avatar, name: 'Adnan Qureshi',
    },receiver: {
      img: avatar, name: "o'neil mclean",
    },
    category:'Property',
    bookingType: 'in person',
    createdAt: '13-August-2020 12:34 AM',
    bookingAt: '13-August-2020 12:34 AM',
  },{
    sender: {
      img: avatar, name: 'Adnan Qureshi',
    },receiver: {
      img: avatar, name: "o'neil mclean",
    },
    category:'Property',
    bookingType: 'in person',
    createdAt: '13-August-2020 12:34 AM',
    bookingAt: '13-August-2020 12:34 AM',
  },{
    sender: {
      img: avatar, name: 'Adnan Qureshi',
    },receiver: {
      img: avatar, name: "o'neil mclean",
    },
    category:'Property',
    bookingType: 'in person',
    createdAt: '13-August-2020 12:34 AM',
    bookingAt: '13-August-2020 12:34 AM',
  },{
    sender: {
      img: avatar, name: 'Adnan Qureshi',
    },receiver: {
      img: avatar, name: "o'neil mclean",
    },
    category:'Property',
    bookingType: 'in person',
    createdAt: '13-August-2020 12:34 AM',
    bookingAt: '13-August-2020 12:34 AM',
  },{
    sender: {
      img: avatar, name: 'Adnan Qureshi',
    },receiver: {
      img: avatar, name: "o'neil mclean",
    },
    category:'Property',
    bookingType: 'in person',
    createdAt: '13-August-2020 12:34 AM',
    bookingAt: '13-August-2020 12:34 AM',
  },{
    sender: {
      img: avatar, name: 'Adnan Qureshi',
    },receiver: {
      img: avatar, name: "o'neil mclean",
    },
    category:'Property',
    bookingType: 'in person',
    createdAt: '13-August-2020 12:34 AM',
    bookingAt: '13-August-2020 12:34 AM',
  },{
    sender: {
      img: avatar, name: 'Adnan Qureshi',
    },receiver: {
      img: avatar, name: "o'neil mclean",
    },
    category:'Property',
    bookingType: 'in person',
    createdAt: '13-August-2020 12:34 AM',
    bookingAt: '13-August-2020 12:34 AM',
  },{
    sender: {
      img: avatar, name: 'Adnan Qureshi',
    },receiver: {
      img: avatar, name: "o'neil mclean",
    },
    category:'Property',
    bookingType: 'in person',
    createdAt: '13-August-2020 12:34 AM',
    bookingAt: '13-August-2020 12:34 AM',
  },{
    sender: {
      img: avatar, name: 'Adnan Qureshi',
    },receiver: {
      img: avatar, name: "o'neil mclean",
    },
    category:'Property',
    bookingType: 'in person',
    createdAt: '13-August-2020 12:34 AM',
    bookingAt: '13-August-2020 12:34 AM',
  },
  
                

]

const Index = () => {
  return (
    <>
      <Navbar />
      <div className="d-md-none">
        <MobileTable
        />
      </div>
      <div className="d-none d-md-block">
        <Container>
          <RequestListStyled>
            {/* <div className="btn">
              <CustomButton
                bgcolor={BasicColor}
                color="white"
                padding="8px 8px"
                type="submit"
                width="130px"
                title="Create new"
              />
            </div> */}
            <Table
              pagination={{pageSize:21}}
              columns={columns}
scroll={{
                x:'auto',
                y:'70vh'
              }}
              dataSource={[...adminsData.map(({ category,
                sender,
                receiver,
                bookingType,
                bookingAt,
                createdAt},id)=>(
                  {
                    id,
                    category,
                    sender,
                    receiver,
                    bookingType,
                    bookingAt,
                    createdAt
                  }
              ))]}
            />
          </RequestListStyled>
        </Container>

      </div>
    </>
  );
};

export default Index;
