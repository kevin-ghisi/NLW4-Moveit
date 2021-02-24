import styles from '../styles/components/Profile.module.css'

export function Profile() {
    return (
        <div className={styles.profileContainer}>
            <img src="http://github.com/BlackBloodDelta.png" alt="Kévin Ghisi"/>
            <div>
                <strong>Kévin Ghisi</strong>
                <p>
                    <img src="icons/level.svg" alt="Lvel"/>
                    Level 1
                </p>
            </div>
        </div>
    )
}