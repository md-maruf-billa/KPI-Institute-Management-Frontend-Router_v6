import { useGetAllAcademicSemestersQuery } from "../../../redux/features/admin/academicManagement.api";



const AcademicSemester = () => {
    const { data, isLoading, isError } = useGetAllAcademicSemestersQuery(undefined);
    console.log(data)
    if (isLoading) return <div>Loading...</div>;
    if (isError) return <div>
        Hey mama error ace
    </div>;
    return (
        <div>
            <video
                src="https://drive.google.com/uc?id=1JDoLUfIe41ktK0WOn9Nds-BgVSSP9Id2&export=download"
                controls
            />
        </div>
    );

};

export default AcademicSemester;
