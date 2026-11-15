export default aniTimer;
export type AniTimerProps = {
    /**
     * Called every frame with the elapsed time. Return false to cancel.
     */
    isContinue?: ((elapsedTime: number) => boolean) | undefined;
    /**
     * Called once when the animation is finished.
     */
    done?: ((duration: number) => void) | undefined;
    /**
     * Called once when the animation is cancelled.
     */
    cancel?: (() => void) | undefined;
};
/**
 * @typedef {object} AniTimerProps
 * @property {(elapsedTime: number) => boolean=} isContinue
 * Called every frame with the elapsed time. Return false to cancel.
 * @property {(duration: number) => void=} done
 * Called once when the animation is finished.
 * @property {() => void=} cancel
 * Called once when the animation is cancelled.
 */
/**
 * Run the callback with requestAnimationFrame until the duration is reached.
 *
 * @param {AniTimerProps} options
 * @param {number} duration
 * @returns {void}
 */
declare function aniTimer({ isContinue, done, cancel }: AniTimerProps, duration: number): void;
