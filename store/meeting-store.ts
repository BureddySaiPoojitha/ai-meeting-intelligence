import { create } from "zustand"
import { Meeting } from "../types/meeting"

interface MeetingState {
  meetings: Meeting[]
  addMeeting: (meeting: Meeting) => void
}

export const useMeetingStore = create<MeetingState>((set) => ({
  meetings: [],
  addMeeting: (meeting) =>
    set((state) => ({
      meetings: [...state.meetings, meeting],
    })),
}))