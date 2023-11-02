import Pagination from "./Pagination";
import Search from "./Search";
import Table from "./Table";

export default function UserSection() {
    return (
        <section className="card users-container">
            <Search />

            <Table />


            {/* Pagination component */}
            <Pagination />
            
        </section>
    );
}