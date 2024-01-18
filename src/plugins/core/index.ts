import {SystemResults} from '@/lib/system';
import {World} from '@/lib/world';
import {ReservedStages} from '@/types/world';
import {reviveIDs, updateMaxID} from './ids';
import {addChangeEvents} from './changes';
import {System} from '@/types/system';

/**
 * Adds essential library plugins to the world. The engine will not function as expected without calling this.
 */
export const addCorePlugins = (world: World) => {
  return world
    .addSystem(resetEvents, ReservedStages.POST_STEP)
    .addSystem(addChangeEvents, ReservedStages.POST_STAGE)
    .addSystem(reviveIDs, ReservedStages.POST_BATCH)
    .addSystem(updateMaxID, ReservedStages.POST_BATCH);
};

/**
 * Deletes all events from the world. Designed to be called at the end of each step.
 */
const resetEvents: System = () => new SystemResults().set(['events'], {});
