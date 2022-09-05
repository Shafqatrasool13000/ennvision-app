import { Table} from "antd";
import  { UserList } from "./style";
import MobileTable from "./MobileTable";
import { Container } from "react-bootstrap";
import { adminsData, columns } from "./TableData";

const Index = () => {
  return (
    <>
      <div className="d-md-none">
        <MobileTable
        />
      </div>
      <div className="d-none d-md-block">
        <Container>
          <UserList>
            <Table
              pagination={{pageSize:21}}
              columns={columns}
                  scroll={{
                x:'auto',
                y:'75vh'
              }}
              
              dataSource={[...adminsData.map(({fullName,createdAt,email,phone},index)=>(
                  {
                    id: index,
                    fullName: fullName,
                    email,
                    phone,
                    createdAt,
                  }
              ))]}
            />
          </UserList>
        </Container>

      </div>
    </>
  );
};

export default Index;
