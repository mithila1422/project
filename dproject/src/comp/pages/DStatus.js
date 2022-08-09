import NavberD from "../NavberD";

const Dstatus = () => {
    return(
        
        <>
        <NavberD />
        <div className="app-container">
                <table>
                    <thead>
                        <tr>
                            <th>ID</th>
                            <th>Order no</th>
                            <th>Customer Name</th>
                            <th>Phone Number</th>
                            <th>Price</th>
                            <th>Payment</th>
                            <th>Status</th>
                            
                        </tr>
                    </thead>

                    <tbody>
                        <tr>
                            <td>1</td>
                            <td>#A3456W</td>
                            <td>Jenny Chan</td>
                            <td>019423435</td>
                            <td>$28</td>
                            <td>Cash on</td>
                            <td>
                                <select>
                                    <Option>
                                        On the way
                                    </Option>
                                    <Option>
                                        5 minutes left
                                    </Option>
                                    <Option>
                                        Around You
                                    </Option>
                                </select>
                            </td>
                            
                        </tr>
                    </tbody>

                    </table>
                    </div>
                    
        
        </>
    );
}

export default Dstatus;