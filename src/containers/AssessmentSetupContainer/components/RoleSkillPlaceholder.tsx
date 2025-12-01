interface Props {
    role: string;
    setRole: (val: string) => void;
    skills: string[];
    setSkills: (val: string[]) => void;
}

const RoleSkillPlaceholder: React.FC<Props> = ({
    role,
    setRole,
    skills,
    setSkills,
}) => {
    const addSkill = (e: React.KeyboardEvent<HTMLInputElement>) => {
        if (e.key === "Enter") {
            e.preventDefault();
            const val = e.currentTarget.value.trim();
            if (!val) return;
            setSkills([...skills, val]);
            e.currentTarget.value = "";
        }
    };

    return (
        <div className="role-skill-section">
            <div className="form-field">
                <label>Role *</label>
                <input
                    type="text"
                    value={role}
                    placeholder="Auto-extracted Role (editable)"
                    onChange={(e) => setRole(e.target.value)}
                />
            </div>

            <div className="form-field">
                <label>Skills *</label>
                <input
                    type="text"
                    placeholder="Press Enter to add skill"
                    onKeyDown={addSkill}
                />

                <div className="skills-list">
                    {skills.map((s, i) => (
                        <span key={i} className="skill-chip">{s}</span>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default RoleSkillPlaceholder;
