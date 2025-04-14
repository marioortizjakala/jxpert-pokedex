import '@testing-library/jest-dom';
import {
  describe,
  it,
  expect,
  vi,
  beforeEach,
  afterEach,
  afterAll,
} from 'vitest';
import { act, renderHook } from '@testing-library/react';
import { useDebounce } from '../useDebounce';

describe('useDebounce', () => {
  beforeEach(() => {
    vi.useFakeTimers();
  });

  afterAll(() => {
    vi.useRealTimers();
  });

  afterEach(() => {
    vi.clearAllTimers();
  });

  it('returns initial value immediately', () => {
    const { result } = renderHook(() => useDebounce('initial', 500));
    expect(result.current).toBe('initial');
  });

  it('should not update the debounced value before the delay', () => {
    const { result, rerender } = renderHook(
      ({ value, delay }) => useDebounce(value, delay),
      {
        initialProps: { value: 'first', delay: 500 },
      }
    );

    expect(result.current).toBe('first');

    act(() => {
      rerender({ value: 'second', delay: 500 });
    });

    expect(result.current).toBe('first');
  });

  it('should update the debounced value after the delay', () => {
    const { result, rerender } = renderHook(
      ({ value, delay }) => useDebounce(value, delay),
      {
        initialProps: { value: 'first', delay: 100 },
      }
    );
    expect(result.current).toBe('first');
    act(() => {
      rerender({ value: 'second', delay: 500 });
    });
    expect(result.current).toBe('first');
    act(() => {
      vi.advanceTimersByTime(501);
    });

    expect(result.current).toBe('second');
  });

  it('should cancel the previous timeout when value changes', () => {
    const { result, rerender } = renderHook(
      ({ value, delay }) => useDebounce(value, delay),
      {
        initialProps: { value: 'first', delay: 500 },
      }
    );

    act(() => {
      rerender({ value: 'second', delay: 500 });
      vi.advanceTimersByTime(300);
      rerender({ value: 'third', delay: 500 });
    });
    act(() => {
      vi.advanceTimersByTime(500);
    });

    expect(result.current).toBe('third');
  });

  it('should handle delay changes', () => {
    const { result, rerender } = renderHook(
      ({ value, delay }) => useDebounce(value, delay),
      {
        initialProps: { value: 'first', delay: 500 },
      }
    );

    act(() => {
      rerender({ value: 'second', delay: 1000 });
      vi.advanceTimersByTime(500);
    });

    expect(result.current).toBe('first');

    act(() => {
      vi.advanceTimersByTime(1001);
    });

    expect(result.current).toBe('second');
  });

  it('should clear timeout on unmount', () => {
    const spy = vi.spyOn(global, 'clearTimeout');
    const { unmount } = renderHook(() => useDebounce('value', 500));

    unmount();

    expect(spy).toHaveBeenCalled();
    spy.mockRestore();
  });

  it('should work with non-string values', () => {
    const { result, rerender } = renderHook(
      ({ value, delay }) => useDebounce(value, delay),
      {
        initialProps: { value: { foo: '' }, delay: 500 },
      }
    );

    const newValue = { foo: 'baz' };

    act(() => {
      rerender({ value: newValue, delay: 500 });
    });
    act(() => {
      vi.advanceTimersByTime(501);
    });

    expect(result.current).toEqual(newValue);
  });

  it('should handle multiple rapid value changes', () => {
    const { result, rerender } = renderHook(
      ({ value, delay }) => useDebounce(value, delay),
      {
        initialProps: { value: 1, delay: 500 },
      }
    );

    act(() => {
      rerender({ value: 2, delay: 500 });
      vi.advanceTimersByTime(100);
      rerender({ value: 3, delay: 500 });
      vi.advanceTimersByTime(100);
      rerender({ value: 4, delay: 500 });
    });
    act(() => {
      vi.advanceTimersByTime(501);
    });

    expect(result.current).toBe(4);
  });
});
