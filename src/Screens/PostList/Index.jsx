import { Link } from "react-router-dom";
import { Table, Space} from "antd";
import { PostListStyled } from "./style";
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
    title: "postLayout",
    dataIndex: "postLayout",
    key: "postLayout",
    render: (text, record) => (
        <Link className="ms-3" to={`/estimates/${record.id}`}>
          {text}
        </Link>
    ),
  },
  {
    title: "Story Type",
    dataIndex: "postType",
    key: "postType",
    render: (text, record) => (
      <Link to={`/estimates/${record.id}`}>
        {text}
      </Link>
    ),
  },
  {
    title: "location",
    dataIndex: "location",
    key: "location",
    render: (text, record) => (
      <Link to={`/estimates/${record.id}`}>
        {text}
      </Link>
    ),
  },
  {
    title: "Boost",
    key: "boost",
    dataIndex: "boost",
    render: (text, record) => (
      <Link to={`/estimates/${record.id}`}>

        {text}
      </Link>
    ),
  }, {
    title: "Tags",
    key: "tags",
    dataIndex: "tags",
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
    title: "Disappear",
    key: "disappear",
    dataIndex: "disappear",
    render: (text, record) => (
      <Link to={`/estimates/${record.id}`}>
        {text}
      </Link>
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
    postLayout: 'Classic Layout',
    postType: 'test - picture - video',
    location: 'mississauga, ontario, canada',
    tags: 'yes',
    boost: 'no',
    disappear: '20 mins',
    createdAt: '13-August-2020 12:34 AM'
  },
  {
    postLayout: 'Classic Layout',
    postType: 'test - picture - video',
    location: 'mississauga, ontario, canada',
    tags: 'yes',
    boost: 'no',
    disappear: '20 mins',
    createdAt: '13-August-2020 12:34 AM'
  }, {
    postLayout: 'Classic Layout',
    postType: 'test - picture - video',
    location: 'mississauga, ontario, canada',
    tags: 'yes',
    boost: 'no',
    disappear: '20 mins',
    createdAt: '13-August-2020 12:34 AM'
  }, {
    postLayout: 'Classic Layout',
    postType: 'test - picture - video',
    location: 'mississauga, ontario, canada',
    tags: 'yes',
    boost: 'no',
    disappear: '20 mins',
    createdAt: '13-August-2020 12:34 AM'
  }, {
    postLayout: 'Classic Layout',
    postType: 'test - picture - video',
    location: 'mississauga, ontario, canada',
    tags: 'yes',
    boost: 'no',
    disappear: '20 mins',
    createdAt: '13-August-2020 12:34 AM'
  }, {
    postLayout: 'Classic Layout',
    postType: 'test - picture - video',
    location: 'mississauga, ontario, canada',
    tags: 'yes',
    boost: 'no',
    disappear: '20 mins',
    createdAt: '13-August-2020 12:34 AM'
  }, {
    postLayout: 'Classic Layout',
    postType: 'test - picture - video',
    location: 'mississauga, ontario, canada',
    tags: 'yes',
    boost: 'no',
    disappear: '20 mins',
    createdAt: '13-August-2020 12:34 AM'
  }, {
    postLayout: 'Classic Layout',
    postType: 'test - picture - video',
    location: 'mississauga, ontario, canada',
    tags: 'yes',
    boost: 'no',
    disappear: '20 mins',
    createdAt: '13-August-2020 12:34 AM'
  }, {
    postLayout: 'Classic Layout',
    postType: 'test - picture - video',
    location: 'mississauga, ontario, canada',
    tags: 'yes',
    boost: 'no',
    disappear: '20 mins',
    createdAt: '13-August-2020 12:34 AM'
  }, {
    postLayout: 'Classic Layout',
    postType: 'test - picture - video',
    location: 'mississauga, ontario, canada',
    tags: 'yes',
    boost: 'no',
    disappear: '20 mins',
    createdAt: '13-August-2020 12:34 AM'
  }, {
    postLayout: 'Classic Layout',
    postType: 'test - picture - video',
    location: 'mississauga, ontario, canada',
    tags: 'yes',
    boost: 'no',
    disappear: '20 mins',
    createdAt: '13-August-2020 12:34 AM'
  }, {
    postLayout: 'Classic Layout',
    postType: 'test - picture - video',
    location: 'mississauga, ontario, canada',
    tags: 'yes',
    boost: 'no',
    disappear: '20 mins',
    createdAt: '13-August-2020 12:34 AM'
  }, {
    postLayout: 'Classic Layout',
    postType: 'test - picture - video',
    location: 'mississauga, ontario, canada',
    tags: 'yes',
    boost: 'no',
    disappear: '20 mins',
    createdAt: '13-August-2020 12:34 AM'
  }, {
    postLayout: 'Classic Layout',
    postType: 'test - picture - video',
    location: 'mississauga, ontario, canada',
    tags: 'yes',
    boost: 'no',
    disappear: '20 mins',
    createdAt: '13-August-2020 12:34 AM'
  }, {
    postLayout: 'Classic Layout',
    postType: 'test - picture - video',
    location: 'mississauga, ontario, canada',
    tags: 'yes',
    boost: 'no',
    disappear: '20 mins',
    createdAt: '13-August-2020 12:34 AM'
  }, {
    postLayout: 'Classic Layout',
    postType: 'test - picture - video',
    location: 'mississauga, ontario, canada',
    tags: 'yes',
    boost: 'no',
    disappear: '20 mins',
    createdAt: '13-August-2020 12:34 AM'
  }, {
    postLayout: 'Classic Layout',
    postType: 'test - picture - video',
    location: 'mississauga, ontario, canada',
    tags: 'yes',
    boost: 'no',
    disappear: '20 mins',
    createdAt: '13-August-2020 12:34 AM'
  }, {
    postLayout: 'Classic Layout',
    postType: 'test - picture - video',
    location: 'mississauga, ontario, canada',
    tags: 'yes',
    boost: 'no',
    disappear: '20 mins',
    createdAt: '13-August-2020 12:34 AM'
  }, {
    postLayout: 'Classic Layout',
    postType: 'test - picture - video',
    location: 'mississauga, ontario, canada',
    tags: 'yes',
    boost: 'no',
    disappear: '20 mins',
    createdAt: '13-August-2020 12:34 AM'
  }, {
    postLayout: 'Classic Layout',
    postType: 'test - picture - video',
    location: 'mississauga, ontario, canada',
    tags: 'yes',
    boost: 'no',
    disappear: '20 mins',
    createdAt: '13-August-2020 12:34 AM'
  }, {
    postLayout: 'Classic Layout',
    postType: 'test - picture - video',
    location: 'mississauga, ontario, canada',
    tags: 'yes',
    boost: 'no',
    disappear: '20 mins',
    createdAt: '13-August-2020 12:34 AM'
  }, {
    postLayout: 'Classic Layout',
    postType: 'test - picture - video',
    location: 'mississauga, ontario, canada',
    tags: 'yes',
    boost: 'no',
    disappear: '20 mins',
    createdAt: '13-August-2020 12:34 AM'
  }, {
    postLayout: 'Classic Layout',
    postType: 'test - picture - video',
    location: 'mississauga, ontario, canada',
    tags: 'yes',
    boost: 'no',
    disappear: '20 mins',
    createdAt: '13-August-2020 12:34 AM'
  }, {
    postLayout: 'Classic Layout',
    postType: 'test - picture - video',
    location: 'mississauga, ontario, canada',
    tags: 'yes',
    boost: 'no',
    disappear: '20 mins',
    createdAt: '13-August-2020 12:34 AM'
  }, {
    postLayout: 'Classic Layout',
    postType: 'test - picture - video',
    location: 'mississauga, ontario, canada',
    tags: 'yes',
    boost: 'no',
    disappear: '20 mins',
    createdAt: '13-August-2020 12:34 AM'
  }, {
    postLayout: 'Classic Layout',
    postType: 'test - picture - video',
    location: 'mississauga, ontario, canada',
    tags: 'yes',
    boost: 'no',
    disappear: '20 mins',
    createdAt: '13-August-2020 12:34 AM'
  }, {
    postLayout: 'Classic Layout',
    postType: 'test - picture - video',
    location: 'mississauga, ontario, canada',
    tags: 'yes',
    boost: 'no',
    disappear: '20 mins',
    createdAt: '13-August-2020 12:34 AM'
  }, {
    postLayout: 'Classic Layout',
    postType: 'test - picture - video',
    location: 'mississauga, ontario, canada',
    tags: 'yes',
    boost: 'no',
    disappear: '20 mins',
    createdAt: '13-August-2020 12:34 AM'
  }, {
    postLayout: 'Classic Layout',
    postType: 'test - picture - video',
    location: 'mississauga, ontario, canada',
    tags: 'yes',
    boost: 'no',
    disappear: '20 mins',
    createdAt: '13-August-2020 12:34 AM'
  }, {
    postLayout: 'Classic Layout',
    postType: 'test - picture - video',
    location: 'mississauga, ontario, canada',
    tags: 'yes',
    boost: 'no',
    disappear: '20 mins',
    createdAt: '13-August-2020 12:34 AM'
  }, {
    postLayout: 'Classic Layout',
    postType: 'test - picture - video',
    location: 'mississauga, ontario, canada',
    tags: 'yes',
    boost: 'no',
    disappear: '20 mins',
    createdAt: '13-August-2020 12:34 AM'
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
          <PostListStyled>
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
              pagination={{pageSize:21,showLessItems:true}}
              columns={columns}
scroll={{
                x:'auto',
                y:'70vh'
              }}
              dataSource={[...adminsData.map(({ postLayout,
                postType,
                location,
                tags,
                boost,
                disappear,
                createdAt }, id) => (
                {
                  id,
                  postLayout,
                  postType,
                  location,
                  tags,
                  boost,
                  disappear,
                  createdAt
                }
              ))]}
            />
          </PostListStyled>
        </Container>

      </div>
    </>
  );
};

export default Index;
