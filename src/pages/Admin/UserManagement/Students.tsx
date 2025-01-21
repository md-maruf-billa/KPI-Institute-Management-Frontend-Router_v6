import { useGetAllStudentsQuery } from "../../../redux/features/admin/userManagement.api";
import { Avatar, Button, Flex, Image, Pagination, Select, Space, Table, TableColumnsType, TableProps } from "antd";
import { TAPIParams, TStudent } from "../../../Types";
import { useState } from "react";


type DataType = Pick<TStudent, "_id" | "id" | "name" | "fullName" | "email" | "admissionSemester" | "profileImg" | "academicDepartment">

const columns: TableColumnsType<DataType> = [
      {
            title: 'Student Image',
            dataIndex: 'profileImg',
            render: (img) => {
                  return <Avatar
                        size={{ xs: 24, sm: 25, md: 30, lg: 60, xl: 60, xxl: 60 }}
                        src={
                              <Image
                                    src={img}
                              />
                        }
                  />
            }
      },
      {
            title: 'Student Name',
            dataIndex: 'fullName',
      },
      {
            title: "Student Roll",
            dataIndex: 'id',
      },
      {
            title: 'Email',
            dataIndex: 'email',
      },
      {
            title: 'Department',
            dataIndex: 'department',
      },
      {
            title: 'Semester',
            dataIndex: 'semester',
      },
      {
            title: 'Actions',
            dataIndex: 'actions',
            render: () => {
                  return (
                        <Space>
                              <Button type='primary' >
                                    Details
                              </Button>
                              <Button color="cyan" type='primary' >
                                    Edit Details
                              </Button>
                              <Button type='primary' danger>
                                    Block
                              </Button>
                        </Space>
                  )
            },
            width: "1%"
      },
];

const Students = () => {
      // local state
      const [params, setParams] = useState<TAPIParams[]>([])
      const [currentPage, setCurrentPage] = useState<number>(1);
      const [dataPerPage, setDataPerPage] = useState<number>(5);

      // fetch data
      const { data, isLoading, isFetching } = useGetAllStudentsQuery([{ name: "sort", value: "id" }, { name: "page", value: currentPage }, { name: "limit", value: dataPerPage }, ...params])
      const studentData = data?.data?.map((student: DataType) => ({
            key: student._id,
            profileImg: student.profileImg,
            fullName: student.fullName,
            id: student.id,
            email: student.email,
            department: student.academicDepartment?.name,
            semester: student.admissionSemester?.name + " (" + student.admissionSemester?.year + ")",
      }))
      const onChange: TableProps<DataType>['onChange'] = (_pagination, filters, _sorter, extra) => {
            const tempParams: TAPIParams[] = [];
            if (extra.action === "filter") {
                  filters.name?.forEach(it => tempParams.push({ name: "name", value: String(it) }))
                  filters.year?.forEach(it => tempParams.push({ name: "year", value: String(it) }))
                  filters.startMonth?.forEach(it => tempParams.push({ name: "startMonth", value: String(it) }))
                  filters.endMonth?.forEach(it => tempParams.push({ name: "endMonth", value: String(it) }))
            }
            setParams(tempParams)
      };

      return (
            <>
                  <h1 className="stylish-font" style={{ textAlign: "center", marginBottom: "30px" }}>All Runnig Semester Data</h1>
                  <Table<DataType>
                        columns={columns}
                        dataSource={studentData}
                        onChange={onChange}
                        loading={isLoading || isFetching}
                        pagination={false}
                  />
                  <Flex justify="center" align="center" style={{ margin: "20px 0" }}>
                        <Pagination onChange={(page) => setCurrentPage(page)} pageSize={dataPerPage} defaultCurrent={currentPage} total={data?.meta?.total} />
                        <Select
                              placeholder="data/page"
                              defaultValue={dataPerPage}
                              style={{ width: 120 }}
                              onChange={(e) => setDataPerPage(e)}
                              options={[
                                    { value: 5, label: '5/page' },
                                    { value: 10, label: '10/page' },
                                    { value: 20, label: '20/page' },
                                    { value: 100, label: '100/page' },

                              ]}
                        />
                  </Flex>
            </>
      );

};

export default Students;