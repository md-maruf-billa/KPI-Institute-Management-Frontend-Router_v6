import { useGetAllAcademicSemestersQuery } from "../../redux/features/academicSemester/academicSemesterAPI";


const AcademicSemester = () => {
    const { data,isLoading,isError } = useGetAllAcademicSemestersQuery(undefined);
    console.log(data)
    if (isLoading) return <div>Loading...</div>;
    if (isError) return <div>
        Hey mama error ace
    </div>;
    return (
        <div>
            This is all academic semester page
        </div>
    );
};

export default AcademicSemester;
