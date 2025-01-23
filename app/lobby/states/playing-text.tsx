import { Timer } from "~/lobby/components/timer";
import { Input } from "~/shadcn/components/input";

import { useLobbyActor } from "~/lobby/hooks/actor";

export interface PlayingTextProps {
  title: string;
  duration: number;
}

export function PlayingText(props: PlayingTextProps) {
  const actor = useLobbyActor();

  return (
    <div className="flex-grow grid grid-rows-[auto,3fr,7fr] place-items-center gap-2 md:gap-6 p-6">
      <Timer duration={props.duration} />
      <div className="text-center">
        <h2 className="scroll-m-20 pb-2 text-3xl font-semibold tracking-tight">{props.title}</h2>
      </div>
      <Input
        placeholder="Entrez votre réponse ici"
        className="max-w-xl px-4 py-6 text-lg md:text-lg"
        onChange={(event) => actor.send({ type: "actionAnswerText", answer: event.target.value })}
      />
    </div>
  );
}
