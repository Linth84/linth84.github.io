import './Skills.css'
import { useLanguage } from '../../i18n/LanguageContext'

const skillGroups = [
  {
    index: '01',
    key: 'frontend',
    skills: [
      'REACT',
      'TYPESCRIPT',
      'JAVASCRIPT',
      'HTML',
      'CSS',
      'VITE',
    ],
  },
  {
    index: '02',
    key: 'backend',
    skills: [
      'SPRING BOOT',
      'FASTAPI',
      'REST API',
      'POSTGRESQL',
      'SUPABASE',
      'MINIO',
    ],
  },
  {
    index: '03',
    key: 'aiData',
    skills: [
      'PYTHON',
      'MACHINE LEARNING',
      'DATA ANALYSIS',
      'PANDAS',
      'SCIKIT-LEARN',
      'NUMPY',
    ],
  },
  {
    index: '04',
    key: 'tools',
    skills: [
      'GIT',
      'GITHUB',
      'DOCKER',
      'OCI',
      'VS CODE',
      'ANDROID STUDIO',
    ],
  },
] as const

const additionalSkills = [
  'JAVA',
  'SQL',
  'CADDY',
  'LINUX',
  'ANDROID',
]

export default function Skills() {
  const { t } = useLanguage()
  const skillsText = t.skills

  return (
    <section className="skills" id="skills">
      {/* =====================================================
          SECTION HEADER
          ===================================================== */}

      <div className="skills-heading">
        <span>{skillsText.heading}</span>
        <span>{skillsText.headingRight}</span>
      </div>

      {/* =====================================================
          INTRO
          ===================================================== */}

      <div className="skills-intro">
        <div>
          <p className="skills-eyebrow">
            {skillsText.eyebrow}
          </p>

          <h2>
            {skillsText.titleLine1}
            <span> {skillsText.titleLine2}</span>
          </h2>
        </div>

        <p className="skills-description">
          {skillsText.description}
        </p>
      </div>

      {/* =====================================================
          CAPABILITY MATRIX
          ===================================================== */}

      <div className="skills-grid">
        {skillGroups.map((group) => {
          const groupText =
            skillsText.groups[group.key]

          return (
            <article
              className="skill-module"
              key={group.index}
            >
              <div className="skill-module-header">
                <span>{group.index}</span>

                <div>
                  <strong>{groupText.title}</strong>
                  <small>{groupText.subtitle}</small>
                </div>

                <span className="skill-module-status">
                  {skillsText.online}
                </span>
              </div>

              <div className="skill-module-body">
                {group.skills.map((skill, skillIndex) => (
                  <div
                    className="skill-node"
                    key={skill}
                  >
                    <span className="skill-node-index">
                      {String(skillIndex + 1).padStart(2, '0')}
                    </span>

                    <span className="skill-node-name">
                      {skill}
                    </span>

                    <span
                      className="skill-node-signal"
                      aria-hidden="true"
                    >
                      <span />
                      <span />
                      <span />
                    </span>
                  </div>
                ))}
              </div>

              <div className="skill-module-footer">
                <span>
                  {skillsText.module} // {group.index}
                </span>

                <span>
                  {skillsText.capabilitiesActive}
                </span>
              </div>
            </article>
          )
        })}
      </div>

      {/* =====================================================
          ADDITIONAL KNOWLEDGE
          ===================================================== */}

      <div className="skills-additional">
        <div className="skills-additional-header">
          <div>
            <span className="skills-additional-dot" />

            <span>
              {skillsText.additional.title}
            </span>
          </div>

          <span>
            {skillsText.additional.right}
          </span>
        </div>

        <div className="skills-additional-list">
          {additionalSkills.map((skill, index) => (
            <div
              className="skills-additional-node"
              key={skill}
            >
              <span>
                {String(index + 1).padStart(2, '0')}
              </span>

              <strong>
                {skill}
              </strong>
            </div>
          ))}
        </div>
      </div>

      {/* =====================================================
          CURRENT FOCUS
          ===================================================== */}

      <div className="skills-focus">
        <div className="skills-focus-label">
          <span className="skills-focus-dot" />

          <div>
            <span>
              {skillsText.focus.label}
            </span>

            <strong>
              {skillsText.focus.title}
            </strong>
          </div>
        </div>

        <p>
          {skillsText.focus.description}
        </p>

        <span className="skills-focus-code">
          {skillsText.focus.code}
        </span>
      </div>
    </section>
  )
}
