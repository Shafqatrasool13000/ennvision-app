import { Link } from "react-router-dom";
import { Table, Space } from "antd";
import { NewsfeedListStyled } from "./style";
import CustomButton from "../../Components/CustomButton/Index";
import { secondaryGreen } from "../../Components/GlobalStyle";
import deleteIcon from "../../assets/icons/ic_delete.svg";
import editIcon from "../../assets/icons/ic_edit.svg";
import MobileTable from "./MobileTable";
import Navbar from '../../Components/Navbar/Index';
import { Container } from "react-bootstrap";

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
    title: "Category",
    dataIndex: "category",
    key: "category",
    render: (text, record) => (
        <Link className="ms-3" to={`/estimates/${record.id}`}>
          {text}
        </Link>
    ),
  }, {
    title: "Title",
    dataIndex: "title",
    key: "title",
    render: (text, record) => (
        <Link className="ms-3" to={`/estimates/${record.id}`}>
          {text}
        </Link>
    ),
  }, {
    title: "Comments",
    dataIndex: "comments",
    key: "comments",
    render: (text, record) => (
        <Link className="ms-3" to={`/estimates/${record.id}`}>
          {text}
        </Link>
    ),
  }, {
    title: "Likes",
    dataIndex: "likes",
    key: "likes",
    render: (text, record) => (
        <Link className="ms-3" to={`/estimates/${record.id}`}>
          {text}
        </Link>
    ),
  }, {
    title: "Shares",
    dataIndex: "shares",
    key: "shares",
    render: (text, record) => (
        <Link className="ms-3" to={`/estimates/${record.id}`}>
          {text}
        </Link>
    ),
  }, {
    title: "Saved",
    dataIndex: "saved",
    key: "saved",
    render: (text, record) => (
        <Link className="ms-3" to={`/estimates/${record.id}`}>
          {text}
        </Link>
    ),
  },
  {
    title: "Boost",
    dataIndex: "boost",
    key: "boost",
    render: (text, record) => (
      <Link to={`/estimates/${record.id}`}>
        {text}
      </Link>
    ),
  },
  {
    title: "Views",
    dataIndex: "views",
    key: "views",
    render: (text, record) => (
      <Link to={`/estimates/${record.id}`}>
        {text}
      </Link>
    ),
  },
  {
    title: "Booking",
    key: "booking",
    dataIndex: "booking",
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
    title: "Create At",
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
    category: 'Property',
    title: 'executive home central...',
    comments: '23,345',
    likes: '23,345',
    shares: '23,345',
    saved: '23,345',
    boost: 'yes',
    views: 'allow',
    booking: 'allow',
    createdAt: '13-August-2020 12:34 AM',
  },
  {
    category: 'Property',
    title: 'executive home central...',
    comments: '23,345',
    likes: '23,345',
    shares: '23,345',
    saved: '23,345',
    boost: 'yes',
    views: 'allow',
    booking: 'allow',
    createdAt: '13-August-2020 12:34 AM',
  }, {
    category: 'Property',
    title: 'executive home central...',
    comments: '23,345',
    likes: '23,345',
    shares: '23,345',
    saved: '23,345',
    boost: 'yes',
    views: 'allow',
    booking: 'allow',
    createdAt: '13-August-2020 12:34 AM',
  }, {
    category: 'Property',
    title: 'executive home central...',
    comments: '23,345',
    likes: '23,345',
    shares: '23,345',
    saved: '23,345',
    boost: 'yes',
    views: 'allow',
    booking: 'allow',
    createdAt: '13-August-2020 12:34 AM',
  }, {
    category: 'Property',
    title: 'executive home central...',
    comments: '23,345',
    likes: '23,345',
    shares: '23,345',
    saved: '23,345',
    boost: 'yes',
    views: 'allow',
    booking: 'allow',
    createdAt: '13-August-2020 12:34 AM',
  }, {
    category: 'Property',
    title: 'executive home central...',
    comments: '23,345',
    likes: '23,345',
    shares: '23,345',
    saved: '23,345',
    boost: 'yes',
    views: 'allow',
    booking: 'allow',
    createdAt: '13-August-2020 12:34 AM',
  }, {
    category: 'Property',
    title: 'executive home central...',
    comments: '23,345',
    likes: '23,345',
    shares: '23,345',
    saved: '23,345',
    boost: 'yes',
    views: 'allow',
    booking: 'allow',
    createdAt: '13-August-2020 12:34 AM',
  }, {
    category: 'Property',
    title: 'executive home central...',
    comments: '23,345',
    likes: '23,345',
    shares: '23,345',
    saved: '23,345',
    boost: 'yes',
    views: 'allow',
    booking: 'allow',
    createdAt: '13-August-2020 12:34 AM',
  }, {
    category: 'Property',
    title: 'executive home central...',
    comments: '23,345',
    likes: '23,345',
    shares: '23,345',
    saved: '23,345',
    boost: 'yes',
    views: 'allow',
    booking: 'allow',
    createdAt: '13-August-2020 12:34 AM',
  }, {
    category: 'Property',
    title: 'executive home central...',
    comments: '23,345',
    likes: '23,345',
    shares: '23,345',
    saved: '23,345',
    boost: 'yes',
    views: 'allow',
    booking: 'allow',
    createdAt: '13-August-2020 12:34 AM',
  }, {
    category: 'Property',
    title: 'executive home central...',
    comments: '23,345',
    likes: '23,345',
    shares: '23,345',
    saved: '23,345',
    boost: 'yes',
    views: 'allow',
    booking: 'allow',
    createdAt: '13-August-2020 12:34 AM',
  }, {
    category: 'Property',
    title: 'executive home central...',
    comments: '23,345',
    likes: '23,345',
    shares: '23,345',
    saved: '23,345',
    boost: 'yes',
    views: 'allow',
    booking: 'allow',
    createdAt: '13-August-2020 12:34 AM',
  }, {
    category: 'Property',
    title: 'executive home central...',
    comments: '23,345',
    likes: '23,345',
    shares: '23,345',
    saved: '23,345',
    boost: 'yes',
    views: 'allow',
    booking: 'allow',
    createdAt: '13-August-2020 12:34 AM',
  }, {
    category: 'Property',
    title: 'executive home central...',
    comments: '23,345',
    likes: '23,345',
    shares: '23,345',
    saved: '23,345',
    boost: 'yes',
    views: 'allow',
    booking: 'allow',
    createdAt: '13-August-2020 12:34 AM',
  }, {
    category: 'Property',
    title: 'executive home central...',
    comments: '23,345',
    likes: '23,345',
    shares: '23,345',
    saved: '23,345',
    boost: 'yes',
    views: 'allow',
    booking: 'allow',
    createdAt: '13-August-2020 12:34 AM',
  }, {
    category: 'Property',
    title: 'executive home central...',
    comments: '23,345',
    likes: '23,345',
    shares: '23,345',
    saved: '23,345',
    boost: 'yes',
    views: 'allow',
    booking: 'allow',
    createdAt: '13-August-2020 12:34 AM',
  }, {
    category: 'Property',
    title: 'executive home central...',
    comments: '23,345',
    likes: '23,345',
    shares: '23,345',
    saved: '23,345',
    boost: 'yes',
    views: 'allow',
    booking: 'allow',
    createdAt: '13-August-2020 12:34 AM',
  }, {
    category: 'Property',
    title: 'executive home central...',
    comments: '23,345',
    likes: '23,345',
    shares: '23,345',
    saved: '23,345',
    boost: 'yes',
    views: 'allow',
    booking: 'allow',
    createdAt: '13-August-2020 12:34 AM',
  }, {
    category: 'Property',
    title: 'executive home central...',
    comments: '23,345',
    likes: '23,345',
    shares: '23,345',
    saved: '23,345',
    boost: 'yes',
    views: 'allow',
    booking: 'allow',
    createdAt: '13-August-2020 12:34 AM',
  }, {
    category: 'Property',
    title: 'executive home central...',
    comments: '23,345',
    likes: '23,345',
    shares: '23,345',
    saved: '23,345',
    boost: 'yes',
    views: 'allow',
    booking: 'allow',
    createdAt: '13-August-2020 12:34 AM',
  }, {
    category: 'Property',
    title: 'executive home central...',
    comments: '23,345',
    likes: '23,345',
    shares: '23,345',
    saved: '23,345',
    boost: 'yes',
    views: 'allow',
    booking: 'allow',
    createdAt: '13-August-2020 12:34 AM',
  }, {
    category: 'Property',
    title: 'executive home central...',
    comments: '23,345',
    likes: '23,345',
    shares: '23,345',
    saved: '23,345',
    boost: 'yes',
    views: 'allow',
    booking: 'allow',
    createdAt: '13-August-2020 12:34 AM',
  }, {
    category: 'Property',
    title: 'executive home central...',
    comments: '23,345',
    likes: '23,345',
    shares: '23,345',
    saved: '23,345',
    boost: 'yes',
    views: 'allow',
    booking: 'allow',
    createdAt: '13-August-2020 12:34 AM',
  }, {
    category: 'Property',
    title: 'executive home central...',
    comments: '23,345',
    likes: '23,345',
    shares: '23,345',
    saved: '23,345',
    boost: 'yes',
    views: 'allow',
    booking: 'allow',
    createdAt: '13-August-2020 12:34 AM',
  }, {
    category: 'Property',
    title: 'executive home central...',
    comments: '23,345',
    likes: '23,345',
    shares: '23,345',
    saved: '23,345',
    boost: 'yes',
    views: 'allow',
    booking: 'allow',
    createdAt: '13-August-2020 12:34 AM',
  }, {
    category: 'Property',
    title: 'executive home central...',
    comments: '23,345',
    likes: '23,345',
    shares: '23,345',
    saved: '23,345',
    boost: 'yes',
    views: 'allow',
    booking: 'allow',
    createdAt: '13-August-2020 12:34 AM',
  }, {
    category: 'Property',
    title: 'executive home central...',
    comments: '23,345',
    likes: '23,345',
    shares: '23,345',
    saved: '23,345',
    boost: 'yes',
    views: 'allow',
    booking: 'allow',
    createdAt: '13-August-2020 12:34 AM',
  }, {
    category: 'Property',
    title: 'executive home central...',
    comments: '23,345',
    likes: '23,345',
    shares: '23,345',
    saved: '23,345',
    boost: 'yes',
    views: 'allow',
    booking: 'allow',
    createdAt: '13-August-2020 12:34 AM',
  }, {
    category: 'Property',
    title: 'executive home central...',
    comments: '23,345',
    likes: '23,345',
    shares: '23,345',
    saved: '23,345',
    boost: 'yes',
    views: 'allow',
    booking: 'allow',
    createdAt: '13-August-2020 12:34 AM',
  }, {
    category: 'Property',
    title: 'executive home central...',
    comments: '23,345',
    likes: '23,345',
    shares: '23,345',
    saved: '23,345',
    boost: 'yes',
    views: 'allow',
    booking: 'allow',
    createdAt: '13-August-2020 12:34 AM',
  }, {
    category: 'Property',
    title: 'executive home central...',
    comments: '23,345',
    likes: '23,345',
    shares: '23,345',
    saved: '23,345',
    boost: 'yes',
    views: 'allow',
    booking: 'allow',
    createdAt: '13-August-2020 12:34 AM',
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
          <NewsfeedListStyled>
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
              dataSource={[...adminsData.map(({ booking, boost, category, comments, createdAt, likes, saved, shares, title, views }, id) => (
                {
                  id,
                  booking, 
                  boost,
                   category, 
                   comments, 
                   createdAt,
                    likes,
                     saved, 
                     shares, 
                     title,
                      views
                }
              ))]}
            />
          </NewsfeedListStyled>
        </Container>

      </div>
    </>
  );
};

export default Index;
