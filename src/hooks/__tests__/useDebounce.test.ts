import { useDebounce } from '@/hooks/useDebounce';
import { describe, it, expect, vi, beforeEach } from 'vitest';
import { renderHook, act } from '@testing-library/react-hooks';

describe('useDebounce', () => {
  beforeEach(() => {
    vi.useFakeTimers();
  });

  it('returns the initial value immediately', () => {
    const { result } = renderHook(() => useDebounce('initial', 300));
    expect(result.current).toBe('initial');
  });

  it('updates value after debounce delay', () => {
    let value = 'first';
    const { result, rerender } = renderHook(
      ({ val, delay }) => useDebounce(val, delay),
      {
        initialProps: { val: value, delay: 500 },
      }
    );

    expect(result.current).toBe('first');

    value = 'second';
    rerender({ val: value, delay: 500 });

    expect(result.current).toBe('first');

    act(() => {
      vi.advanceTimersByTime(500);
    });

    expect(result.current).toBe('second');
  });

  it('resets debounce if value changes before delay', () => {
    let value = 'start';
    const { result, rerender } = renderHook(
      ({ val, delay }) => useDebounce(val, delay),
      {
        initialProps: { val: value, delay: 300 },
      }
    );

    // Update value before timer finishes
    value = 'middle';
    rerender({ val: value, delay: 300 });

    act(() => {
      vi.advanceTimersByTime(200); // Not enough time
    });

    // Should still be 'start'
    expect(result.current).toBe('start');

    // Change again
    value = 'final';
    rerender({ val: value, delay: 300 });

    act(() => {
      vi.advanceTimersByTime(300);
    });

    expect(result.current).toBe('final');
  });
});
