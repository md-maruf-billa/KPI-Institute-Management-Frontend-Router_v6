import { Table, TableColumnsType, TableProps } from "antd";
import { useGetAllAcademicSemestersQuery } from "../../../redux/features/admin/academicManagement.api";
import { TAPIParams, TSemesterInfo } from "../../../Types";
import { monthConstant, semesterNameConstants, semesterStartYear } from "../../../constants/global.constant";
import { useState } from "react";

interface DataType {
    key: React.Key;
    name: string;
    year: string;
    code: string;
    startMonth: string;
    endMonth: string;
}

const monthFilterData = monthConstant.map((month: string) => ({ text: month, value: month }));
const yearFilterData = semesterStartYear.map((year) => ({ text: year.label, value: year.value }));
const semesterNameFilterDate = semesterNameConstants.map((semester) => ({ text: semester.label, value: semester.label }))

const columns: TableColumnsType<DataType> = [
    {
        title: 'Semester Name',
        dataIndex: 'name',
        showSorterTooltip: { target: 'full-header' },
        filters: semesterNameFilterDate

    },
    {
        title: 'Start Year',
        dataIndex: 'year',
        defaultSortOrder: 'descend',
        filters: yearFilterData
    },
    {
        title: "Semester Code",
        dataIndex: 'code',
    },
    {
        title: 'Start Month',
        dataIndex: 'startMonth',
        filters: monthFilterData
    },
    {
        title: 'End Month',
        dataIndex: 'endMonth',
        filters: monthFilterData

    },
];

const AcademicSemester = () => {
    const [params, setParams] = useState<TAPIParams[]>([])
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
    const { data: academicSemesterData, isLoading, isFetching } = useGetAllAcademicSemestersQuery(params);
    const semesterTableData = academicSemesterData?.data?.map((semester: TSemesterInfo) => ({
        key: semester._id,
        name: semester.name,
        year: semester.year,
        code: semester.code,
        startMonth: semester.startMonth,
        endMonth: semester.endMonth,
    }))
    return (
        <>
            <h1 className="stylish-font" style={{ textAlign: "center", marginBottom: "30px" }}>All Runnig Semester Data</h1>
            <Table<DataType>
                columns={columns}
                dataSource={semesterTableData}
                onChange={onChange}
                showSorterTooltip={{ target: 'sorter-icon' }}
                loading={isLoading || isFetching}
            />
        </>
    );

};

export default AcademicSemester;