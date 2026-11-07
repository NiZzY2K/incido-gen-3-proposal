import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ShieldAlert, CheckCircle2, FileText } from 'lucide-react';
import { SOURCE_AUDIT_NOTES } from '../../data/eventData';

interface OrganizerAuditModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const OrganizerAuditModal: React.FC<OrganizerAuditModalProps> = ({ isOpen, onClose }) => {
  return (
    <AnimatePresence>
      {isOpen && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6"
          role="dialog"
          aria-modal="true"
          aria-labelledby="audit-modal-title"
        >
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-[#050C1B]/85 backdrop-blur-md"
          />

          {/* Modal Dialog */}
          <motion.div
            initial={{ opacity: 0, scale: 0.96, y: 12 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.96, y: 12 }}
            transition={{ duration: 0.22 }}
            className="relative z-10 w-full max-w-3xl max-h-[85vh] flex flex-col rounded-2xl bg-[#0D1B3B] border border-[#0866FF]/45 shadow-2xl overflow-hidden"
          >
            {/* Header */}
            <div className="p-5 sm:p-6 bg-[#071126] border-b border-[#B4C2DE]/15 flex items-start justify-between gap-4">
              <div className="flex items-start gap-3">
                <div className="p-2.5 rounded-xl bg-[#0866FF]/20 border border-[#0866FF]/40 text-[#3B82F6] shrink-0">
                  <ShieldAlert className="w-5 h-5" />
                </div>
                <div>
                  <span className="font-mono text-[10px] uppercase tracking-widest text-[#60A5FA] block">
                    INTERNAL ORGANIZER REVIEW & SOURCE GOVERNANCE
                  </span>
                  <h2
                    id="audit-modal-title"
                    className="text-lg sm:text-xl font-black text-white tracking-tight mt-0.5"
                  >
                    Source Proposal Document Audit & Advisory Notes
                  </h2>
                </div>
              </div>

              <button
                type="button"
                onClick={onClose}
                className="p-2 rounded-lg bg-[#0D1B3B] text-[#B4C2DE] hover:text-white border border-[#B4C2DE]/15 transition-colors"
                aria-label="Close modal"
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            {/* Body */}
            <div className="p-5 sm:p-6 overflow-y-auto space-y-4">
              <p className="text-xs sm:text-sm text-[#B4C2DE] leading-relaxed">
                This website strictly preserves the factual accuracy of{' '}
                <code className="text-white font-mono">INCIDO GEN 3.0 Sponsorship Proposal.pdf</code>{' '}
                without inventing metrics, dates, or package rules. Below are the four source
                document observations flagged for the organizing committee’s review:
              </p>

              {SOURCE_AUDIT_NOTES.map((note) => (
                <div
                  key={note.id}
                  className="p-4 sm:p-5 rounded-xl bg-[#071126]/90 border border-[#B4C2DE]/15 space-y-2.5"
                >
                  <div className="flex flex-wrap items-center justify-between gap-2">
                    <h3 className="text-sm sm:text-base font-bold text-white flex items-center gap-2">
                      <FileText className="w-4 h-4 text-[#0866FF]" />
                      <span>{note.title}</span>
                    </h3>
                    <span className="font-mono text-[11px] px-2.5 py-0.5 rounded bg-[#0866FF]/20 text-[#60A5FA] border border-[#0866FF]/30">
                      {note.sectionRef}
                    </span>
                  </div>

                  <p className="text-xs sm:text-sm text-[#B4C2DE] leading-relaxed">
                    <strong className="text-white">Source Observation:</strong> {note.observation}
                  </p>

                  <div className="p-3 rounded-lg bg-[#0D1B3B]/80 border border-[#0866FF]/25 flex items-start gap-2.5 text-xs text-[#B4C2DE]">
                    <CheckCircle2 className="w-4 h-4 text-[#0866FF] shrink-0 mt-0.5" />
                    <span>
                      <strong className="text-white">Implementation & Recommendation:</strong>{' '}
                      {note.recommendation}
                    </span>
                  </div>
                </div>
              ))}
            </div>

            {/* Footer */}
            <div className="p-4 sm:p-5 bg-[#071126] border-t border-[#B4C2DE]/15 flex items-center justify-between gap-4">
              <span className="font-mono text-[11px] text-[#B4C2DE]">
                Configurable in <code className="text-white">src/data/eventData.ts</code> &{' '}
                <code className="text-white">src/data/sponsorshipData.ts</code>
              </span>
              <button
                type="button"
                onClick={onClose}
                className="px-4 py-2 rounded-lg bg-[#0866FF] hover:bg-[#3B82F6] text-white text-xs font-bold transition-colors"
              >
                Close Notes
              </button>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};

