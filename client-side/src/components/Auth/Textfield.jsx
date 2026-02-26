export default function Textfield({ label, text, value, onChange, onBlur, name, error, touched }) {
    return (
        <div className="mb-3 text-white">
            <label className="form-label fw-bold">{label}</label>
            <input
                style={{ background: "gray", color: "white" }}
                type="text"
                placeholder={text}
                required
                className="form-control"
                value={value}
                onChange={onChange}
                onBlur={onBlur}
                name="name"
            />
            {error && touched && <div className="text-danger">{error}</div>}
        </div>)
}