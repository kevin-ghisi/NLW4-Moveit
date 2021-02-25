import { useContext } from 'react'
import { ChallengesContext } from '../contexts/ChallengesContext'
import styles from '../styles/components/Profile.module.css'

export function Profile() {
    const {level} = useContext(ChallengesContext);

    return (
        <div className={styles.profileContainer}>
            <img src="http://github.com/BlackBloodDelta.png" alt="Kévin Ghisi"/>
            <div>
                <strong>Kévin Ghisi</strong>
                <p>
                    <img src="icons/level.svg" alt="Lvel"/>
                    Level {level}
                </p>
            </div>
        </div>
    )
}