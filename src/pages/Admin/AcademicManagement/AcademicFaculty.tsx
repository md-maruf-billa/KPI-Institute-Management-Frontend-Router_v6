import { Button, Col, Flex, Input, InputRef, Space, Table, TableColumnsType, TableColumnType } from "antd";
import { FilterDropdownProps } from "antd/es/table/interface";
import { useRef, useState } from "react";
import Highlighter from 'react-highlight-words';
import { SearchOutlined } from '@ant-design/icons';
import { useGetAllAcademicFacultyQuery } from "../../../redux/features/admin/academicManagement.api";
import { TAcademicFaculty } from "../../../Types";



type DataIndex = keyof TAcademicFaculty;

const AcademicFaculty = () => {
      const { data: fcultyData, isFetching } = useGetAllAcademicFacultyQuery(undefined);
      const facultyTableData = fcultyData?.data?.map((faulty: TAcademicFaculty) => ({ key: faulty._id, name: faulty.name }))
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

      const getColumnSearchProps = (dataIndex: DataIndex): TableColumnType<TAcademicFaculty> => ({
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

      const columns: TableColumnsType<TAcademicFaculty> = [
            {
                  title: 'Faculty Name',
                  dataIndex: 'name',
                  key: 'name',
                  width: '30%',
                  ...getColumnSearchProps('name'),
            },
            {
                  title: 'Actions',
                  dataIndex: 'age',
                  key: 'age',
                  width: '20%',

            }

      ];


      return (
            <div>
                  <h1 className="stylish-font" style={{ textAlign: "center", marginBottom: "30px" }}>All academic faculty</h1>
                  <Flex align="center" justify="center">

                        <Col span={12}>
                              <Table<TAcademicFaculty> columns={columns}  dataSource={facultyTableData} loading={isFetching} />
                        </Col>
                  </Flex>
            </div>
      );
};

export default AcademicFaculty;