import Pagination from "./Pagination";
import Search from "./Search";
import Table from "./Table";

export default function UserSection() {
    return (
        <section class="card users-container">
            <Search />

            <Table />

            <button className="btn-add btn">Add new user</button>

            {/* Pagination component */}
            <Pagination />
            
        </section>
    );
}