import CompanyFollowedCard from "@/components/Atoms/CompanyFollowedCard";

export default function CompanyFollowed() {
    return (
        <section className="flex flex-col w-full p-5 bg-white gap-2 min-h-screen rounded-sm border">
            <CompanyFollowedCard
                img="https://images.vietnamworks.com/pictureofcompany/ff/11128530.png"
                title="Công ty cổ phần quản lý bất động sản"
            />
            <CompanyFollowedCard
                img="https://images.vietnamworks.com/pictureofcompany/9c/11125788.png"
                title="Công ty cổ phần quản lý bất động sản"
            />
            <CompanyFollowedCard
                img="https://images.vietnamworks.com/pictureofcompany/9c/11125788.png"
                title="Công ty cổ phần quản lý bất động sản"
            />
            <CompanyFollowedCard
                img="https://images.vietnamworks.com/pictureofcompany/9c/11125788.png"
                title="Công ty cổ phần quản lý bất động sản"
            />
        </section>
    );
}
