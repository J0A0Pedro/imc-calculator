export default function Height({ height }) {
    return (
        <input type="text" maxLength={4} placeholder="Altura: 1.75" onChange={(e) => height(e.target.value)} />
    )
}