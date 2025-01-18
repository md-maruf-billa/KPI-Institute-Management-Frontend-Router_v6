import { useRef, useState } from "react";
import { useGetAllAcademicDepartmentQuery } from "../../../redux/features/admin/academicManagement.api";
import { TAcademicDepartment } from "../../../Types";
import { Button, Col, Flex, Input, InputRef, Space, Table, TableColumnsType, TableColumnType } from "antd";
import { FilterDropdownProps } from "antd/es/table/interface";
import { SearchOutlined } from '@ant-design/icons';
import Highlighter from "react-highlight-words";

type DataIndex = keyof TAcademicDepartment;
const AcademicDepartment = () => {
      const { data, isFetching } = useGetAllAcademicDepartmentQuery(undefined);
      const facultyTableData = data?.data?.map((department: TAcademicDepartment) => ({ key: department._id, name: department.name, facultyName: department.academicFaculty?.name ?? 'Unknown' }))

      const [searchText, setSearchText] = useState('');
      const [searchedColumn, setSearchedColumn] = useState('');
      const searchInput = useRef<InputRef>(null);

      const handleSearch = (
            selectedKeys: string[],
            confirm: FilterDropdownProps['confirm'],
            dataIndex: DataIndex,
      ) => {
            confirm();
            setSearchText(selectedKeys[0]);
            setSearchedColumn(dataIndex);
      };

      const handleReset = (clearFilters: () => void) => {
            clearFilters();
            setSearchText('');
      };

      const getColumnSearchProps = (dataIndex: DataIndex): TableColumnType<TAcademicDepartment> => ({
            filterDropdown: ({ setSelectedKeys, selectedKeys, confirm, clearFilters, close }) => (
                  <div style={{ padding: 8 }} onKeyDown={(e) => e.stopPropagation()}>
                        <Input
                              ref={searchInput}
                              placeholder={`Search ${dataIndex}`}
                              value={selectedKeys[0]}
                              onChange={(e) => setSelectedKeys(e.target.value ? [e.target.value] : [])}
                              onPressEnter={() => handleSearch(selectedKeys as string[], confirm, dataIndex)}
                              style={{ marginBottom: 8, display: 'block' }}
                        />
                        <Space>
                              <Button
                                    type="primary"
                                    onClick={() => handleSearch(selectedKeys as string[], confirm, dataIndex)}
                                    icon={<SearchOutlined />}
                                    size="small"
                                    style={{ width: 90 }}
                              >
                                    Search
                              </Button>
                              <Button
                                    onClick={() => clearFilters && handleReset(clearFilters)}
                                    size="small"
                                    style={{ width: 90 }}
                              >
                                    Reset
                              </Button>
                              <Button
                                    type="link"
                                    size="small"
                                    onClick={() => {
                                          close();
                                    }}
                              >
                                    close
                              </Button>
                        </Space>
                  </div>
            ),

            render: (text) =>
                  searchedColumn === dataIndex ? (
                        <Highlighter
                              highlightStyle={{ backgroundColor: '#ffc069', padding: 2, borderRadius: "2px", fontSize: 20 }}
                              searchWords={[searchText]}
                              autoEscape
                              textToHighlight={text ? text.toString() : ''}
                        />
                  ) : (
                        text
                  ),
      });

      const columns: TableColumnsType<TAcademicDepartment> = [
            {
                  title: 'Department Name',
                  dataIndex: 'name',
                  key: 'name',
                  width: '30%',
                  ...getColumnSearchProps('name'),
            },
            {
                  title: 'Faculty Name',
                  dataIndex: 'facultyName',
                  key: 'facultyName',
                  width: '20%',
                  ...getColumnSearchProps('facultyName')

            },
            {
                  title: 'Actions',
                  dataIndex: 'age',
                  key: '1',
                  width: '20%',

            }

      ];

      return (
            <Flex align="center" justify="center">
                  <Col span={16}>
                        <h1 style={{ textAlign: "center", marginBottom: "30px" }}> All academic department</h1>
                        <Table<TAcademicDepartment> columns={columns} dataSource={facultyTableData} loading={isFetching} />
                  </Col>
            </Flex>
      );
};

export default AcademicDepartment;