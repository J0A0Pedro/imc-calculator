export default function Weight({ weight }) {
    return (
        <input type="text" placeholder="Peso: 70" maxLength={3} onChange={(e) => weight(e.target.value)} />
    )
}