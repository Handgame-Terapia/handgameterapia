import FinalDashboard from "@/app/(dashboard)/components/dash/page";
import prismadb from "@/lib/prismadb";

interface DashboardPageProps{
    params: { clientId: string}
};

const DashboardPage: React.FC<DashboardPageProps> =  async ({
    params
}) => {
    const client = await prismadb.tb_client.findFirst({
        where: {
            id: params.clientId
        }
    });

    return (
        <div>
            <FinalDashboard/>
        </div>
    );
}
 
export default DashboardPage;