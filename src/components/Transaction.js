import TransactionsList from "./TransactionList";
function Transaction ({transactions}) {
    return (
        <table>
            <tr>
                <th>date</th>
                <th>description</th>
                <th>category</th>
                <th>amount</th>
            </tr>
            {transactions.map ((transaction) => 
            <TransactionsList 
            date = {transaction.date} 
            description = {transaction.description}
            category ={transaction.category}
            amount = {transaction.amount}
            key = {transaction.id}/>
            )}
        </table>
    )
}
export default Transaction;