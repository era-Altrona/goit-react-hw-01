import styles from "./TransactionHistory.module.css";

export default function TransactionHistoryItem({ type, amount, currency }) {
  return (
    <tr className={styles.table}>
      <td>{type}</td>
      <td>{amount}</td>
      <td>{currency}</td>
    </tr>
  );
}
