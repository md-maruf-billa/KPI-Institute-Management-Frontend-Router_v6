import { Table } from "antd";
import { useGetAllAcademicSemestersQuery } from "../../../redux/features/admin/academicManagement.api";



const AcademicSemester = () => {
    const { data, isLoading, isFetching } = useGetAllAcademicSemestersQuery(undefined);
    console.log(data)

    return (
        <div>
            <Table loading={isLoading}>

            </Table>

        </div>
    );

};

export default AcademicSemester;
